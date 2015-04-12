let defaultWarnings = {
  callingResolverOnServer: true,
  cannotFindContext: true,
  classDoesNotHaveAnId: true,
  contextNotPassedInToConstructor: true,
  promiseNotReturnedFromRemotely: true,
  reservedFunction: true,
  stateIsNullOrUndefined: true,
  stateSourceAlreadyExists: true,
  superNotCalledWithOptions: true
}

function warnings(disable = []) {
  if (!Array.isArray(disable)) {
    disable = [disable]
  }

  let ret = {}
  Object.keys(defaultWarnings).forEach(warning => ret[warning] = disable.indexOf(warning) ? false : defaultWarnings[warning])
  return ret
}

export default warnings
