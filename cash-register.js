// My Solution

function checkCashRegister(price, cash, cid) {
  let currency = {
    "PENNY":0.01,
    "TWENTY": 20,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let funds = cid.reduce(function(a,b){
            return a + b[1];}, 0)
  let prop
  console.log(funds-(cash-price))
  let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let status;
  let diff = (cash-price) 
  if (funds-(cash-price)<0) {
    status = "INSUFFICIENT_FUNDS"
    change = []
    }
  else{ 
  
    for(let i = cid.length-1;i>=0;i--){
      prop = cid[i][0]
      while(diff>=currency[prop] && cid[i][1]>0){
        cid[i][1] -= currency[prop]
        diff -= currency[prop]
        diff = round(diff)
        change[i][1] += currency[prop]
        change[i][1] = round(change[i][1])
        funds -= currency[prop]
        funds = round(funds)
      }
    }

   
  if(funds > 0) {
    status = "OPEN"
    for(let i = change.length-1;i>=0;i--){
    if(change[i][1] == 0) change.splice(i,1)
    else continue
    
  }
  
  }
  else if(funds == 0) status = "CLOSED"
  if(diff>0)   {
    status = "INSUFFICIENT_FUNDS"
    change = []}

  change = change.sort(function(a, b){
    return b[1]-a[1]})
  }

  function Change(stat,ch){
    this.status = stat,
    this.change = ch 
  }

  return new Change(status,change);
}
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

