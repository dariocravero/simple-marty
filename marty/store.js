export default class Store {
  static type = 'Store'

  static use(Module, flux, options = {}) {
    return new Module({context: {flux}, ...options})
  }

  constructor({context, ...options}) {
    if (!context) {
      throw('A Store needs a flux context to work from')
    }
    this.context = context

    this.dispatchToken = this.context.flux.dispatcher.register(this.handleAction.bind(this))
    this._state = {}
    this.replaceState(this.getInitialState() || {})
  }

  getInitialState() { return {} }
  get state() { return this._state }
  set state(state) { return this.replaceState(state) }
}
