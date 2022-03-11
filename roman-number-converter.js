// My Solution

function convertToRoman(num) {
  let roman = {
    1000 : "M",
    900: "CM",
    500 : "D",
    400: "CD",
    100 : "C",
    90: "XC",
    50 : "L",
    40: "XL",
    10 : "X",
    9:"IX",
    5: "V",
    4: "IV",
    1: "I"
      }
    let arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let romanNum = ""
    let times 
  for(let i=0;i<arr.length;i++){
    times =  Math.floor(num/arr[i])
   
    if(num>=arr[i])    
    for(let j=0;j<times;j++){
      num -= arr[i]
      romanNum += roman[arr[i]]
    }
    }
  }
 return romanNum;
}
