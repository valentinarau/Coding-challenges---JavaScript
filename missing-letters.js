// My Solution

function fearNotLetter(str) {
  str = str.split('').map(a => a.charCodeAt())
   for(let i=0;i<str.length-1;i++){
     if(str[i]+1 != str[i+1])
      return String.fromCharCode(str[i]+1)
   }

  return undefined
}
