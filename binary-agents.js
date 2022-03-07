// My Solution

/*
  binaryAgent("01000001 01110010 01100101 01101110 
               00100111 01110100 00100000 01100010 
               01101111 01101110 01100110 01101001 
               01110010 01100101 01110011 00100000 
               01100110 01110101 01101110 00100001 
               00111111") should return the string Aren't bonfires fun!?
*/

function binaryAgent(str) {
  let binary = {0:1,1:2,2:4,3:8,4:16,5:32,6:64,7:128}
  let word = ''
  let decimal = 0;
  str = str.split(" ");
  for(let i = 0;i<str.length;i++){
    decimal = 0
    for(let j = 0;j<8;j++)
    {
      if(str[i].split('').reverse()[j] == 1) decimal += binary[j]
    }
    word += String.fromCharCode(decimal)
  }
  return word;
}
