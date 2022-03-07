// My Solution

function palindrome(str) {
  str = str.replace(/\W|_/g,"").toLowerCase()
  let strCpy = ""+str
  let str1 = strCpy.substring(0,Math.floor(str.length / 2))
  let str2 = ""
  if(str.length % 2 != 0){
    str2 = 
    strCpy.substring(Math.floor(str.length / 2)+1,str.length)
    .split('').reverse().join('')
  }
  else {
    str2 = 
    strCpy.substring(Math.floor(str.length / 2),str.length)
    .split('').reverse().join('')
  }
  return str1 == str2;
}
