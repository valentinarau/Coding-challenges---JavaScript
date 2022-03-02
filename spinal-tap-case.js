// My Solution
// it has to lower case all words and put a tap case in the middle. 
// there are test cases like: "AllThe moments", "All_The_Moments", "All the Moments", etc.

function spinalCase(str) {
   let string = str
   let arr = []
   let id = string.search(/[a-z][A-Z]/)
    while (id != -1){
      arr = string.split('')
      arr.splice(id+1,0," ")
      string = arr.join("")
      id = string.search(/[a-z][A-Z]/)
    }
  return string.toLowerCase().replaceAll(string.match(/_|\s/),"-");
}

// Other FCC Fancy Solutions

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
