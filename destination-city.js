// My Solution
// 129 ms	42.9 MB

var destCity = function(paths) {
    let origins = [];
    let destinations = [];
    for (let i=0;i<paths.length;i++){
        origins.push(paths[i][0]);
        destinations.push(paths[i][1]);
    }
    for(let i=0;i<destinations.length;i++){
        if(!origins.includes(destinations[i])) {
            return destinations[i]
        };  
    }
};
// My other Solution
// 120 ms	42.2 MB
var destCity = function(paths) {
    let origins = [];
    for (let i=0;i<paths.length;i++){
        origins.push(paths[i][0]);
    }
    for(let i=0;i<paths.length;i++){
        if(!origins.includes(paths[i][1])) {
            return paths[i][1]
        };
        
    }
    
};


// Another interesting solutions

// One line
var destCity = function(paths) {
    return paths.find(([f1, t1]) => !paths.find(([f2,t2])=>t1==f2))[1]
};

// Functional
var destCity = function(paths) {
    const arrivals = paths.map(a => a[0]);
    const destinations =  paths.map(a => a[1]);
    
    return destinations.filter(d => arrivals.indexOf(d) === -1).join('');
};


