import IO from 'koa-socket'
import {actions} from './events'

export class SocketIO {

  setup (app) {
    const io = new IO()
    io.attach(app)

    io.on('disconnect', (ctx) => {
      console.log('Client disconnected')
      if (ctx.cursors) {
        ctx.cursors.forEach((cursor) => cursor.close())
      }
    })

    io.on('connection', (ctx) => {
      console.log('Client connected')
      ctx.cursors = []
    })

    io.on('ACTION', (ctx, action) => {
      actions[action.type](action)((result, cursor) => {
        if (result) {
          ctx.socket.emit('ACTION', result)
        }
        if (cursor) {
          if (!ctx.cursors) {
            ctx.cursors = []
          }
          ctx.cursors.push(cursor)
        }
      })
    })
  }

}

export default new SocketIO()
