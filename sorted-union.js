// My Solution
function uniteUnique(arr) {
  let newArr = []
  for(let i=0;i<arguments.length;i++)
  {
    arguments[i] =  [...new Set(arguments[i])];
    newArr = 
    newArr.concat(arguments[i].filter(a=>!newArr.includes(a)))
  }
  return newArr;
}



// Other FCC Fancy Solution
function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}
