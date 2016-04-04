import socketClient from 'socket.io-client'
import {receive} from 'redux/modules/rethinkdb'
import {watchTasks} from 'redux/modules/tasks'

const io = socketClient({
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 10
})

export function setupRealtime (store) {
  io.on('ACTION', (action) => {
    console.log('Receive action ', action)
    store.dispatch(receive(action))
    store.dispatch(action)
  })

  io.on('connect', () => {
    console.log('Connected')
    store.dispatch(watchTasks())
  })

  io.on('disconnect', () => {
    console.log('Disconnected')
  })

  // Init store watchers
  return io
}

export function dispatch (action) {
  console.log('Emit action', action)
  io.emit('ACTION', action)
}

export default {
  setupRealtime,
  dispatch
}
