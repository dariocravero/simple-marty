import { trace, warn } from '../utils/logger'
import Events from './events'
import EventEmitter from 'wolfy87-eventemitter'

export default class Store {
  static type = 'Store'

  static handlers = {}

  static use(Module, marty, options = {}) {
    return new Module({context: {marty}, ...options})
  }

  constructor({context, ...options}) {
    if (!context) {
      throw(`Store: ${this.displayName} need a marty context to work from`)
    }
    this.context = context

    this.dispatchToken = this.context.marty.dispatcher.register(this.handleAction.bind(this))
    this.eventEmitter = new EventEmitter()

    this.invertedHandlers = {}
    Object.keys(this.constructor.handlers).forEach((handlerName) => {
      let handlerActionTypes = this.constructor.handlers[handlerName]
      if (!Array.isArray(handlerActionTypes)) {
        handlerActionTypes = [handlerActionTypes]
      }

      handlerActionTypes.forEach(actionType => this.invertedHandlers[actionType] = handlerName)
    })

    this._state = {}
    this.replaceState(this.getInitialState() || {})
  }

  addListener(type, callback) {
    trace(`Store: ${this.displayName} is adding a ${type} listener`)
    this.eventEmitter.on(type, callback);

    return {
      dispose: () => {
        trace(`Store: ${this.displayName} is disposing a ${type} listener`)
        this.eventEmitter.removeListener(type, callback)
      }
    }
  }

  addChangeListener(callback) { return this.addListener(Events.STORE_CHANGE, callback) }
  addFetchChangedListener(callback) { return this.addListener(Events.STORE_FETCH_CHANGED, callback) }

  clear(newState) {
    this.fetchHistory = {};
    this.failedFetches = {};
    this.fetchInProgress = {};
    this.state = newState || this.getInitialState() || {}
  }

  dispose() {
    this.eventEmitter.removeAllListeners(Events.STORE_CHANGE)
    this.eventEmitter.removeAllListeners(Events.STORE_FETCH_CHANGED)
    this.clear()

    if (this.dispatchToken) {
      this.context.marty.dispatcher.unregister(this.dispatchToken)
      this.dispatchToken = undefined
    }
  }

  getInitialState() { return {} }
  get state() { return this._state }

  handleAction(action) {
    Object.keys(this.invertedHandlers).forEach((actionType) => {
      if (action.type === actionType) {
        const handlerName = this.invertedHandlers[actionType]
        let rollbackHandler

        try {
          this.action = action
          rollbackHandler = this[handlerName].apply(this, action.arguments)
        } finally {
          action.addRollbackHandler(rollbackHandler, this)
        }
      }
    })
  }

  hasChanged(eventArgs) {
    let emitChange = () => {
      this.eventEmitter.emit(Events.STORE_CHANGE, this.state, this, eventArgs)
      // Clear the action once the component has seen it
      this.action = null
    }

    if (this.action) {
      this.action.onActionHandled(this.id, emitChange)
    } else {
      emitChange()
    }
  }

  replaceState(newState) {
    if (this.context.marty.warnings.stateIsNullOrUndefined &&
        (typeof newState === 'undefined' || newState === null)) {
      warn(`Warning: Trying to replace the state of the store ${this.displayName} with null or undefined`)
    }

    if (newState !== this._state) {
      this._state = newState
      this.hasChanged()
    }
  }

  set state(state) { return this.replaceState(state) }
  setState(state) { return this.replaceState({...this.state, ...state}) }

  waitFor(...stores) {
    if (Array.isArray(stores[0])) {
      stores = stores[0]
    }

    this.dispatcher.waitFor(
      stores.map(store => store.dispatchToken || store).filter(store => typeof store === 'string')
    )
  }
}
