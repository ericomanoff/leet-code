const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0; i < items.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < items.length; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};


const printMatch = (nArray, mArray) => {
  for (let i = 0; i < nArray.length; i++) {
    for (let j = 0; j < mArray.length; j++) {
      if (nArray[i] === mArray[j]) {
        console.log('match!')
      }
    }
  }
}


const isPrime = num => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}



const fib = n => {
  if (n < 0) return 0;
  else if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function powersOf2(n) {
  if (n < 1) {
    console.log('n: ', n)
    return 0;
  }
  else if (n == 1) {
    console.log(1);
    return 1;
  } else {
    let prev = powersOf2(n / 2);
    let cur = prev * 2;
    console.log(cur);
    return cur;
  }
}

let binarySearch = function (arr, x) {

  let start = 0, end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {

    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;

    // Else look in left or right half accordingly
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return false;
}


const findIndex = (items, match) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] == match) {
      return i;
    }
    return -1;
  }
};

const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0; i < items.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < items.length; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
}


const printMatch = (nArray, mArray) => {
  for (let i = 0; i < nArray.length; i++) {
    for (let j = 0; j < mArray.length; j++) {
      if (nArray[i] === mArray[j]) {
        console.log('match!')
      }
    }
  }
}


let binarySearch = function (arr, x) {

  let start = 0, end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {

    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;

    // Else look in left or right half accordingly
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return false;
}



const isPrime = n => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}



module.exports = iterativeFunction