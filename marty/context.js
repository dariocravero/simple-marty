import Marty from './core'
import React from 'react'

export default function createContext(Component) {
  const app = this

  class Context extends React.Component {
    constructor(props) {
      super(props)
      this.displayName = `${Component.displayName}Context`
    }

    getChildContext() {
      return {
        app: app
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  Context.childContextTypes = {
    app: React.PropTypes.instanceOf(Marty)
  }

  return Context
}
