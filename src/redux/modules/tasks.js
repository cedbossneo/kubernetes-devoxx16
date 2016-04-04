import {dispatch as r} from 'redux/modules/rethinkdb'
import Immutable from 'immutable'
import { COMPLETE_TASK, FETCH_TASKS, WATCH_TASKS, UPDATE_TASK, ADD_TASK, DELETE_TASK } from '../../../constants/tasks'

export const addTask = (task): Action => {
  return r({
    type: ADD_TASK,
    payload: task
  })
}

export const watchTasks = (): Action => {
  return r({
    type: WATCH_TASKS
  })
}

export const deleteTask = (task): Action => {
  return r({
    type: DELETE_TASK,
    payload: task
  })
}

export const completeTask = (task): Action => {
  return r({
    type: COMPLETE_TASK,
    payload: task
  })
}

// Action Creators
export const actions = {
  watchTasks,
  addTask,
  deleteTask,
  completeTask
}

// Action Handlers
const ACTION_HANDLERS = {
  [FETCH_TASKS]: (state: array, action: {payload: array}): array => Immutable.List(action.payload).sort((a, b) => b.date - a.date),
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
const initialState = Immutable.List()
export default function tasksReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
