// My Solution
// given an array of objects and an array with properties with a value, return the object that matches those

function whatIsInAName(collection, source) {
  let arr = collection;
  for (let prop in source){
    arr=arr.filter(a=>a[prop] == source[prop])
  }
  return arr;
}
