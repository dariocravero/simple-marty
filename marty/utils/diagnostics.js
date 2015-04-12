let Diagnostics = {
  devtoolsEnabled: false,
  enabled: false,
  trace: function trace(...args) {
    if (Diagnostics.enabled) {
      console && console.log.apply(console, args)
    }
  }
}

export default Diagnostics
