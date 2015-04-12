export default class ActionCreators {
  static type = 'ActionCreators'

  static use(Module, marty, options = {}) {
    return new Module({context: {marty}, ...options})
  }

  constructor({context, ...options}) {
    if (!context) {
      throw('An ActionCreators needs a marty context to work within')
    }

    this.context = context
  }

  dispatch(...args) {
    return this.context.marty.dispatcher.dispatchAction({
      args,
      type: ActionCreators.type
    });
  }
}
