// My Solution 

function smallestCommons(arr) {
  let max = Math.max(arr[0],arr[1])
  let min = Math.min(arr[0],arr[1])
  let nums = [...Array(max+1).keys()].filter(num => num>=min);
  
  const upperBound = nums.reduce((prod, curr) => prod * curr);
  for (let multiple = max; multiple <= upperBound; multiple += max) 
  {
    const divisible = nums.every((value) => multiple % value === 0);
    if (divisible) return multiple;
  }
  return multiple;
}
