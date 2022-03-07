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


/*
Tests:

palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.
*/
