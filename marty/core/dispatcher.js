import ActionPayload from './action-payload'
import { Dispatcher } from 'flux'
import EventEmitter from 'wolfy87-eventemitter'

const ACTION_DISPATCHED = 'ACTION_DISPATCHED'

export default function createDispatcher() {
  let emitter = new EventEmitter()
  let dispatcher = new Dispatcher()

  dispatcher.dispatchAction = function(options) {
    let action = new ActionPayload(options)

    this.dispatch(action)

    action.handled()
    emitter.emit(ACTION_DISPATCHED, action)

    return action
  }

  dispatcher.onActionDispatched = function(callback) {
    emitter.on(ACTION_DISPATCHED, callback)

    return {
      dispose() {
        emitter.removeListener(ACTION_DISPATCHED, callback)
      }
    }
  }

  return dispatcher
}
