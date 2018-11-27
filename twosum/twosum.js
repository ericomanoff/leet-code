// const twoSum = (nums, target) => {
//   let map = {}
//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let compliment = target - nums[i];
//     if (map.hasOwnProperty(compliment) && map[compliment] !== i) {
//       return [i, map[compliment]]
//     }
//   }

//   throw new Error('invalid arguments')
// }


const twoSum = (nums, target) => {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (map.hasOwnProperty(compliment) && map[compliment] !== i) {
      return [map[compliment], i]
    }
    map[nums[i]] = i;
  }

  throw new Error('invalid arguments')
}

module.exports = twoSum;