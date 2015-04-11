import { emptyObject, generateId, getName } from '../utils'
import createDispatcher from './dispatcher'

export default class App {
  static use = []

  constructor() {
    this.dispatcher = createDispatcher()
    this.id = generateId()
    this.instances = emptyObject()

    this.constructor.use.forEach((Module) => {
      let options = {}
      if (Array.isArray(Module)) {
        [Module, options] = [...Module]
      }
      this.use(Module, options)
    })
  }

  use(Module, options = {}) {
    const name = getName(Module)
    let instance = this.instances[name]

    if (!instance) {
      let fn = typeof Module.use === 'function' ? Module.use : Module
      instance = this.instances[name] = fn(Module, this, options)
    }

    return instance
  }

  toString() {
    return `<Marty::App #${this.id}>`
  }
}
