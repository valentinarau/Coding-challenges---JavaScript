// My Solution
// given an argument which contains an array and numbers, delete all the occations where those numbers appear in that array and return it
// e.g. destroyer([1,2,3,3,2,1,2,3],2,3) should return [1,1]

function destroyer(arr) {
 let arr1 = [...arguments[0]]
 let newArr = arr1
 for(let i=1;i<arguments.length;i++)
  newArr = newArr.filter(a=>a!=arguments[i])
  return newArr;
}
