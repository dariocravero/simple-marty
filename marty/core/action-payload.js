import generateId from '../utils/generate-id'

export default class ActionPayload {
  constructor({args, id, timestamp, type}) {
    this.actionHandledCallbacks = {}
    this.arguments = args
    this.components = []
    this.id = id || generateId()
    this.rollbackHandlers = []
    this.stores = []
    this.timestamp = timestamp || new Date()
    this.type = type
  }

  // ?
  actionType(type) {
    return typeof type === 'function' ? type.toString() : type
  }

  onActionHandled(id, cb) {
    this.actionHandledCallbacks[id] = cb;
  }

  // ?
  addComponentHandler(component, store) {
    this.components.push({
      id: generateId(),
      store: store.id || store.displayName
    }, ...component);
  }

  addRollbackHandler(rollbackHandler) {
    if (typeof rollbackHandler === 'function') {
      this.rollbackHandlers.push(rollbackHandler);
    }
  }

  // ?
  addStoreHandler(store, handlerName) {
    this.stores.push({
      id: generateId(),
      handler: handlerName,
      store: store.id || store.displayName
    })
  }

  handled() {
    Object.keys(this.actionHandledCallbacks).forEach(key => this.actionHandledCallbacks[key]());
  }

  rollback() {
    this.rollbackHandlers.forEach(rollback => rollback(this.error));
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      stores: this.stores,
      arguments: this.arguments,
      timestamp: this.timestamp,
      components: this.components
    }
  }

  toString() {
    return JSON.stringify(this.toJSON(), null, 2)
  }
}
