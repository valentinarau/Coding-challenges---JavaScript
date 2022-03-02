// My Solution

function myReplace(str, before, after) {
  let exp = new RegExp(before)
  if(before.charAt(0) == before.charAt(0).toUpperCase())
    after = after.charAt(0).toUpperCase() + after.slice(1);
  if(before.charAt(0) == before.charAt(0).toLowerCase())
    after = after.charAt(0).toLowerCase() + after.slice(1);
    
  return str.replace(before,after);
}
