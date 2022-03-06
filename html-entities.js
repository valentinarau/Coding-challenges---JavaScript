// My Solution

function convertHTML(str) {
  let array = ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;","'","&apos;"];
  for(let i=0;i<array.length-1;i+=2){
    str = str.replaceAll(array[i],array[i+1])
  }
  console.log(str)

  return str;
}

// Other FCC Solution

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
