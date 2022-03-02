// My Solution

function diffArray(arr1, arr2) {
  const newArr = 
  arr1.concat(arr2).filter(a => !(arr1.includes(a) && arr2.includes(a)))

  return newArr;
}
