import { ActionCreators, App, constants, container, inContext, Store } from './marty'
import React from 'react'

const ConstantsFoo = constants(['FOO_DO_SOMETHING'])
export { ConstantsFoo }
export class ActionCreatorsFoo extends ActionCreators {
  doSomething(val) { this.dispatch(ConstantsFoo.FOO_DO_SOMETHING, val) }
}
const ConstantsBar = constants(['BAR_DO_SOMETHING'])
export { ConstantsBar }
export class ActionCreatorsBar extends ActionCreators {
  doSomething() { this.dispatch(ConstantsBar.BAR_DO_SOMETHING) }
}
export class StoreFoo extends Store {
  static handlers = {
    something: ConstantsFoo.FOO_DO_SOMETHING
  }

  getInitialState() {
    return {
      some: ''
    }
  }

  something(val) {
    this.state = {
      some: val
    }
  }
}

export class InnerView extends React.Component {
  render() { return <div style={{flexDirection: 'row'}}>InnerView marty: {this.context.marty.toString()}</div> }
}
InnerView.contextTypes = {marty: React.PropTypes.instanceOf(App)}

export class View extends React.Component {
  render() {
    return (
      <div onClick={() => this.context.marty.use(ActionCreatorsFoo).doSomething()}>
        <h1>{this.props.app}</h1>
        <div style={{flexDirection: 'row'}}>View marty: {this.context.marty.toString()}</div>
        <InnerView />
      </div>
    )
  }
}
// Automatically injected because it's being bound.
// View.contextTypes = {
//   marty: React.PropTypes.instanceOf(App)
// }

const foo1 = new App()
const ContextViewFoo1 = inContext(View, foo1)
export { foo1, ContextViewFoo1 }

export class Foo2App extends App {
  // Explicitly load some module with options
  static use = [
    [ActionCreatorsFoo, {some: 'options'}],
    StoreFoo
  ]
}
const foo2 = new Foo2App()
const ContextViewFoo2 = inContext(View, foo2)
export { foo2, ContextViewFoo2 }

export class Bar1App extends App {
  // Explicitly load some module without options
  static use = [
    ActionCreatorsFoo
  ]
}
const bar1 = new Bar1App()
const ContextViewBar1 = inContext(View, bar1)
export { bar1, ContextViewBar1 }

React.render((
  <div>
    <ContextViewFoo1 app='foo1' />
    <ContextViewFoo2 app='foo2' />
    <ContextViewBar1 app='bar1' />
  </div>
), document.getElementById('playground-container'))
