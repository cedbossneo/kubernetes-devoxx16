import RethinkDB from 'utils/rethinkdb'
import { DISPATCH_RETHINKDB, RECEIVE_RETHINKDB } from '../../../constants/rethinkdb'

export const dispatch = (action): Action => {
  return {
    type: DISPATCH_RETHINKDB,
    payload: action
  }
}

export const receive = (action): Action => {
  return {
    type: RECEIVE_RETHINKDB,
    payload: action
  }
}

// Action Creators
export const actions = {
  dispatch,
  receive
}

// Action Handlers
const ACTION_HANDLERS = {
  [DISPATCH_RETHINKDB]: (state: array, action: {payload: array}): array => {
    RethinkDB.dispatch(action.payload)
    return state
  }
}

// Reducer
const initialState = []
export default function rethinkdbReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
