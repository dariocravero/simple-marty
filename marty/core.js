import { Dispatcher } from 'flux'

export default class Marty {
  static use = []
  static create = []

  constructor() {
    this.modules = Object.create(null)

    this.constructor.use.forEach(feature => use.call(this, feature))
    this.dispatcher = new Dispatcher()
    this.constructor.create.forEach(module => create.call(this, module))
    this.id = generateId()
  }

  toString() {
    return `Marty instance with id: ${this.id}`
  }
}

function generateId() {
  return `${Date.now()}-${Math.random()}`
}

function getName(from) {
  return from.name || from.constructor.name
}

// Features supported by this Marty app
// e.g.: it supports Stores
function use(feature) {
  Object.defineProperty(this, getName(feature), {value: feature})
}

// Modules registered within the current app
// e.g.: it registers StoreFoo
function create(Module) {
  let options = Object.create(null)

  if (Array.isArray(Module)) {
    [Module, options] = [...Module]
  }

  const name = getName(Module)
  this.modules[name] = new Module(options)
  Object.defineProperty(this, module, {value: this.modules[name]})
}
