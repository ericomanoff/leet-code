const robber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    findBestSolutionStartingAtI(arr, i)
  }
  return -1
}

const findBestSolutionStartingAtI = (arr, i) => {
  console.log('i: ', i)

}

module.exports = robber;