// My Solution
// 1091 ms	69.1 MB
var maxCoins = function(piles) {
    piles.sort((a,b) => b-a)
    console.log(piles)
    let sum = 0
    let i=1
    for(let j=0;j<piles.length / 3;j++){ // j = 2
        sum += piles[i] // i=5 sum = 18
        console.log(sum)
        i+=2 // i = 5
    }
    
    return sum
};
