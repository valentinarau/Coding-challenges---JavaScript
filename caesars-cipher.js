// My Solution

function rot13(str) {
  let s = str.split(' ')
  let newCode = 0
  let arr = []
  for(let i=0;i<s.length;i++){

    for(let j=0;j<s[i].length;j++){
      newCode = s[i].charCodeAt(j)
      if(s[i].charCodeAt(j)<=64) continue
        if(newCode < 78) newCode += 13
        else newCode -= 13
      arr = s[i].split('')
      arr[j] = String.fromCharCode(newCode)
      s[i] = arr.join('')
      
    }
  }

  return s.join(' ');
}
