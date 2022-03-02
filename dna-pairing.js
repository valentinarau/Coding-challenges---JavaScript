// My Solution

function pairElement(str) {
  let dna = [["A","T"],["C","G"]]
  let arr = str.split("").map(a=>[a])
  for(let i=0;i<arr.length;i++){
    if(dna[1].includes(arr[i][0]))
      if(dna[1][0]==arr[i][0]) arr[i].push(dna[1][1])
      else arr[i].push(dna[1][0])
    else if(dna[0][0]==arr[i][0]) arr[i].push(dna[0][1])
      else arr[i].push(dna[0][0])
  }
  console.log(arr)

  return arr;
}

// Other FCC Fancy Solution

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
