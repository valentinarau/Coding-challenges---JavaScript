// My Solution

function telephoneCheck(str) {
  let regex = /^(1\s?)?([0-9]{3,3}|\([0-9]{3,3}\))(-|\s)?[0-9]{3,3}(-|\s)?\d{4,4}$/
  return regex.test(str);
}
