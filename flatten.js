// This module is used to flatten an arbitrary nested array of integer
function flatten (array) {
  var flat = [];
  for (i in array) {
    if (Array.isArray(array[i])) {
      flat = flat.concat(flatten(array[i]))
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}

module.exports = flatten;
