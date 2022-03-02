// My Solution

function sumAll(arr) {
let sumArr = []
let lowest = Math.min(arr[0],arr[1])
let highest = Math.max(arr[0],arr[1])

for(let i = lowest;i<=highest;i++) sumArr.push(i)

  return sumArr.reduce((a,b)=> a+b);
}

sumAll([1, 4]);

// One FCC Solution

function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}
