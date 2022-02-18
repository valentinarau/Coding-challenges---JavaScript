// My Solution
// 71 ms	45.6 MB
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid = 0;
    
    while(end>=start){
        if(nums[mid] == target) return mid;
        mid = Math.floor((start + end)/2);
        if(nums[mid] > target) end = mid-1;
        if(nums[mid] < target) start = mid+1;  
    }
    return -1;
    };
