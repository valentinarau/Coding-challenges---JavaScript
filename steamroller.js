// My Solution
// flatten an array without using the flat method
/* 
examples:
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
*/

function steamrollArray(arr) {
  let newArr = []
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      newArr.push(...steamrollArray(arr[i])) 
    }
     else newArr.push(arr[i])
  }
  return newArr;
}
