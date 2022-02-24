// My Solution
203 ms	51.3 MB


var BrowserHistory = function(homepage) {
    this.history = [homepage], // leetcode
    this.index = 0 
};

BrowserHistory.prototype.visit = function(url) {
    if(this.index != this.history.length-1) this.history.splice(this.index+1)
    this.history.push(url) 
    this.index = this.history.length-1 //[leetcode,google,facebook,linkedin]
};

BrowserHistory.prototype.back = function(steps) {
    for(let i = 0;i< steps; i++){
        if(this.index==0) break; 
        this.index-- 
    }
    return this.history[this.index] 
};

BrowserHistory.prototype.forward = function(steps) {
    for(let i = 0;i< steps; i++){
        if(this.index==this.history.length-1) break; 
        this.index++ 
    }
    return this.history[this.index] 
};

// Other Solution - more methods but slower
329 ms	51.7 MB


var BrowserHistory = function(homepage) {
    this.history = [homepage], // leetcode
    this.index = 0 //3
};


BrowserHistory.prototype.visit = function(url) {
    if(this.index != this.history.length-1) this.history.splice(this.index+1)
    this.history.push(url) //linkedin
    this.index = this.history.length-1 //[leetcode,google,facebook,linkedin]
};

BrowserHistory.prototype.back = function(steps) {
    this.index = Math.max(0,this.index-steps)
    return this.history[this.index] //1
};

BrowserHistory.prototype.forward = function(steps) {
    this.index = Math.min(this.history.length-1,this.index+steps)
    return this.history[this.index] //3
};


