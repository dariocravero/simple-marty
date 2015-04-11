import { App } from './core'
import React from 'react'

export default function inContext(Component, app) {
  class Context extends React.Component {
    static childContextTypes = {
      flux: React.PropTypes.instanceOf(App)
    }

    constructor(props) {
      super(props)
      this.displayName = `${Component.displayName}Context`
    }

    getChildContext() {
      return {
        flux: app
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  if (!Component.contextTypes) {
    Component.contextTypes = {}
  }
  Component.contextTypes.flux = React.PropTypes.instanceOf(App)

  return Context
}
