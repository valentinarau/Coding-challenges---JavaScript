// My Solution
var interpret = function(command) {
    return command.replace("()","o").replace("(al)","al");
};

/*
  I tried to do:
  var interpret = function(command) {
    command.replace("()","o");
    command.replace("(al)","al");
    return command;
  but didn't work because the command variable is not afected. 
  Replace is like a function that returns a value, but it does not affect what it receives.
  It returns a new string
*/
