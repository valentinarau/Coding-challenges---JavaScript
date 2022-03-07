// My Solution
// Checks if a prop is in all the objects of the collection and that it is thruthy

function truthCheck(collection, pre) {
  if(
    !collection.every(obj=>obj.hasOwnProperty(pre))
  ) return false

  if(
    !collection.every(obj=>obj[pre])
  ) return false
  
  return true;
}
