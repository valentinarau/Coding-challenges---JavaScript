// My Solution

function sumPrimes(num) {
  let sum = 0;
  let flag = false
  for(let i=1;i<=num;i++){
    for(let j=2;j<=i;j++){
      if(i == j) flag = true
      else if(i % j != 0) flag = true
      else {
        flag = false
        break;
      };
    }
    if(flag) sum += i
  }
  return sum;
}

// Other FCC Fancy Solution

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}
