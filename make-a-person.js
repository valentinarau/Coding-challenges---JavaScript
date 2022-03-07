// My Solution

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast
  this.setFullName = function(name){
    fullName = name
  }
  this.setFirstName = function(name){
    fullName = name + " " + fullName.split(' ')[1]
  }
  this.setLastName = function(name){
    fullName = fullName.split(' ')[0] + " " + name
  }
  this.getFullName = function() {
    return fullName;
  };
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
};
