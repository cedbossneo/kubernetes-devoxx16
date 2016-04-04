import RethinkDB from '../rethinkdb'
import { COMPLETE_TASK, FETCH_TASKS, WATCH_TASKS, UPDATE_TASK, ADD_TASK, DELETE_TASK } from '../../constants/tasks'

export const watchTasks = (action): Function => {
  return (dispatch: Function): Promise => {
    return RethinkDB.execute((r, conn) => {
      return r.table('tasks')
        .run(conn)
        .then((cursor) => cursor.toArray())
        .then((tasks) => {
          dispatch({
            type: FETCH_TASKS,
            payload: tasks
          })
        })
    }).then(() => {
      return RethinkDB.execute((r, conn) => {
        return r.table('tasks').changes().run(conn).then((cursor) => {
          cursor.each((error, change) => {
            if (error) return console.error(error.stack)
            if (change.new_val) {
              dispatch({
                type: UPDATE_TASK,
                payload: change.new_val
              }, cursor)
            } else {
              dispatch({
                type: DELETE_TASK,
                payload: change.old_val
              }, cursor)
            }
          })
        })
      })
    })
  }
}

export const deleteTask = (action): Function => {
  return (dispatch: Function): Promise => {
    return RethinkDB.execute((r, conn) => {
      return r.table('tasks')
        .get(action.payload.id)
        .delete()
        .run(conn)
        .then(() => {
          dispatch()
        })
    })
  }
}

export const completeTask = (action): Function => {
  return (dispatch: Function): Promise => {
    return RethinkDB.execute((r, conn) => {
      return r.table('tasks')
        .get(action.payload.id)
        .update({done: !action.payload.done, doneDate: new Date().getTime()})
        .run(conn)
        .then(() => {
          dispatch()
        })
    })
  }
}

export const addTask = (action): Function => {
  return (dispatch: Function): Promise => {
    return RethinkDB.execute((r, conn) => {
      return r.table('tasks')
        .insert(action.payload)
        .run(conn)
        .then((result) => {
          action.payload.id = result.generated_keys[0]
          dispatch({
            type: UPDATE_TASK,
            payload: action.payload
          })
        })
    })
  }
}

export const actions = {
  [WATCH_TASKS]: watchTasks,
  [ADD_TASK]: addTask,
  [DELETE_TASK]: deleteTask,
  [COMPLETE_TASK]: completeTask
}
