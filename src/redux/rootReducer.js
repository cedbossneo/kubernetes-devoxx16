import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import tasks from 'redux/modules/tasks'

export default combineReducers({
  routing,
  tasks
})
