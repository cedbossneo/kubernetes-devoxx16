import r from 'rethinkdb'
import rethinkdb from 'rethinkdbdash'
import Reconsider from 'reconsider'

const RETHINKDB_CONN = {
  host: process.env.RETHINKDB_DRIVER_SERVICE_HOST || 'rethinkdb',
  port: process.env.RETHINKDB_DRIVER_SERVICE_PORT || 28015,
  db: 'todo'
}

export class RethinkDB {

  init () {
    console.log('RethinkDB migration')
    const r = rethinkdb(RETHINKDB_CONN)
    var recon = new Reconsider(r, { db: RETHINKDB_CONN.db })
    return recon.migrateUp()
      .then((ops) => console.dir(ops))
      .catch((err) => {
        console.log(err)
        recon.migrateDown().then((ops) => console.dir(ops))
      })
  }

  execute (cb) {
    return cb(r, this.connection)
  }

  connect () {
    return this.init().then(() => r.connect(RETHINKDB_CONN)).then((connection) => {
      this.connection = connection
      console.log('RethinkDB connected')
    })
  }

}

export default new RethinkDB()
