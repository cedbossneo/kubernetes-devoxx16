import Immutable from 'immutable'
import { UPDATE_TASK, ADD_TASK, DELETE_TASK } from '../../../constants/tasks'

function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}
export const addTask = (task): Action => {
  task.id = guid()
  return {
    type: ADD_TASK,
    payload: task
  }
}

export const deleteTask = (task): Action => {
  return {
    type: DELETE_TASK,
    payload: task
  }
}

export const completeTask = (task): Action => {
  task.done = !task.done
  task.doneDate = new Date().getTime()
  return {
    type: UPDATE_TASK,
    payload: task
  }
}

// Action Creators
export const actions = {
  addTask,
  deleteTask,
  completeTask
}

// Action Handlers
const ACTION_HANDLERS = {
  [ADD_TASK]: (state: array, action: {payload: object}): array => {
    state = state.insert(0, action.payload)
    return state.sort((a, b) => b.date - a.date)
  },
  [UPDATE_TASK]: (state: array, action: {payload: object}): array => {
    var index = state.findIndex((existingTask) => existingTask.id === action.payload.id)
    if (index !== -1) {
      state = state.delete(index)
    }
    state = state.insert(0, action.payload)
    return state.sort((a, b) => b.date - a.date)
  },
  [DELETE_TASK]: (state: array, action: {payload: object}): array => {
    var index = state.findIndex((existingTask) => existingTask.id === action.payload.id)
    if (index !== -1) {
      state = state.delete(index)
    }
    return state.sort((a, b) => b.date - a.date)
  }
}

// Reducer
var now = new Date().getTime()
const initialState = Immutable.List([
  {id: guid(), name: 'Create a Kubernetes cluster', date: now, doneDate: now - 10000, done: true},
  {id: guid(), name: 'Launch a RethinkDB cluster and our wunderful app', date: now + (60000), doneDate: now + 20000, done: true},
  {id: guid(), name: 'Drink a bear with the participants', date: now + (120000), done: false}
])
export default function tasksReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
