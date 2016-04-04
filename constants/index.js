import * as tasks from './tasks'
import * as rethinkdb from './rethinkdb'

export default {
  ...tasks,
  ...rethinkdb
}
