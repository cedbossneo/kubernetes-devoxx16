export function up (r, logger) {
  logger.verbose('Import basic tasks')
  var now = new Date().getTime()
  return r.table('tasks').insert([
    {name: 'Create a Kubernetes cluster', date: now, doneDate: now - 10000, done: true},
    {name: 'Launch a RethinkDB cluster and our wunderful app', date: now + (60000), doneDate: now + 20000, done: true},
    {name: 'Drink a bear with the participants', date: now + (120000), done: false}
  ]).run()
}

export function down (r, logger) {
  return r.table('tasks').remove().run()
}
