export default function constants(array) {
  let ret = {};

  array.forEach(function(actionType) {
    [actionType, `${actionType}_DONE`, `${actionType}_FAILED`, `${actionType}_STARTING`].
      forEach(type => ret[type] = type);
  });

  return ret;
}
