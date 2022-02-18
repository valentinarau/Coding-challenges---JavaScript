// My Solution
// 68 ms	44.2 MB
var longestPalindrome = function(s) {
    let stringArray = s.split('').sort();
    let stringSet = [...new Set(stringArray)];
    let array = stringSet.map(l => stringArray.filter(l2 => l == l2).length)
    let notEven=0;
    let sum = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0) sum += array[i] ;
            else if(array[i]>notEven) {
                    sum += Math.max(notEven-1,0);
                    notEven =array[i]}
                 else sum+= array[i]-1; 
    }
    return sum += notEven;
};
