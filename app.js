import { actionCreator, container, context, Marty, store } from './marty';

export class App extends Marty {
  static use = [
    actionCreator,
    container,
    context,
    store
  ]

  // static create = [
  //   ActionCreatorFoo,
  //   [StoreFoo, {some: 'option'}],
  //   ContainerFoo
  // ]
}


import React from 'react'

export class InnerView extends React.Component {
  render() {
    return <div>inside {this.context.app.toString()}</div>
  }
}
InnerView.contextTypes = {
  app: React.PropTypes.instanceOf(Marty)
}

export class View extends React.Component {
  render() {
    return (
      <div>
        <h1>view</h1>
        <div>some: {this.props.some}</div>
        <div>app: {this.context.app.toString()}</div>
        <InnerView />
      </div>
    )
  }
}
View.contextTypes = {
  app: React.PropTypes.instanceOf(Marty)
}

let app = new App()
const Context = app.createContext(View)
export { Context }

let app2 = new App()
const Context2 = app2.createContext(View)
export { Context2 }

class ConnectorApp extends Marty {
  static connect = [app1, app2]
}

React.render((
  <div>
    <Context some='value' />
    <Context2 some='other value' />
  </div>
), document.getElementById('playground-container'))
