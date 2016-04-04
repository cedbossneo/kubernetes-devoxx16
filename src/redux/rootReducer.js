import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import tasks from 'redux/modules/tasks'
import rethinkdb from 'redux/modules/rethinkdb'

export default combineReducers({
  routing,
  tasks,
  rethinkdb
})
