import { App } from './core'
import React from 'react'

export default function inContext(Component, app) {
  class Context extends React.Component {
    static childContextTypes = {
      marty: React.PropTypes.instanceOf(App)
    }

    constructor(props) {
      super(props)
      this.displayName = `${Component.displayName}Context`
    }

    getChildContext() {
      return {
        marty: app
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  if (!Component.contextTypes) {
    Component.contextTypes = {}
  }
  Component.contextTypes.marty = React.PropTypes.instanceOf(App)

  return Context
}
