/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  //loop through each 'trip' and save the last stop
  //if the last stop is the next stop of a new trip
  //continue the loop
  let pathObject = {}
  for (let i = 0; i < paths.length; i++) {
    const trip = paths[i];
    pathObject[trip[0]] = trip[1]
  }

  for (const origin in pathObject) {
    const dest = pathObject[origin]
    if (!pathObject.hasOwnProperty(dest)) {
      return dest
    }
  }

};

module.exports = destCity