export default class ActionCreators {
  static type = 'ActionCreators'

  static use(Module, flux, options = {}) {
    return new Module({context: {flux}, ...options})
  }

  constructor({context, ...options}) {
    if (!context) {
      throw('An ActionCreators needs a flux context to work within')
    }

    this.context = context
  }

  dispatch(...args) {
    return this.context.flux.dispatcher.dispatchAction({
      args,
      type: ActionCreators.type
    });
  }
}
