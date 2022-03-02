// My Solution

function diffArray(arr1, arr2) {
  const newArr = 
  arr1
  .concat(arr2)
  .filter(a => !(arr1.includes(a) && arr2.includes(a)))

  return newArr;
}

// Other FCC Fancy Solution

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
