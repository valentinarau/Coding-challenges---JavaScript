// Drop every element of the array starting from 0 until func returns true
// My Solution

function dropElements(arr, func) {
  while(!func(arr[0])){
    arr.shift()
  }
  console.log(arr)
  return arr;
}
