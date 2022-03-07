// My Solution

function addTogether(a) {
  let arr = new Array(...arguments)
  if(arr.some(n => !Number.isInteger(n))) return undefined
  if(arguments.length>1 ) 
  return arguments[0] + arguments[1]
  else return (b) => {
    if(!Number.isInteger(b)) return undefined
    return b + a}

}

/*
  Tests:
  
addTogether(2, 3) should return 5.
addTogether(23, 30) should return 53.
addTogether(5)(7) should return 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
addTogether("2", 3) should return undefined.
*/
