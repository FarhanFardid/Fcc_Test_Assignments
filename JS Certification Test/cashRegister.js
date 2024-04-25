function checkCashRegister(price, cash, cid) {
  
    const currencyUnit = {
         "PENNY": 0.01,
         "NICKEL": 0.05,
         "DIME": 0.1,
         "QUARTER": 0.25,
         "ONE": 1,
         "FIVE": 5,
         "TEN": 10,
         "TWENTY": 20,
         "ONE HUNDRED": 100
     };
 
     let change = cash - price;
     let totalCID = 0;
 
     // Calculate total cash in the drawer
     for (let [unit, amount] of cid) {
         totalCID += amount;
     }
 
     // If cash-in-drawer is less than the change due
     if (totalCID < change) {
         return { status: "INSUFFICIENT_FUNDS", change: [] };
     }
 
     // If cash-in-drawer is equal to the change due
     if (totalCID === change) {
         return { status: "CLOSED", change: cid };
     }
 
     // Calculate change due
     let changeArray = [];
     for (let i = cid.length - 1; i >= 0; i--) {
         let unit = cid[i][0];
         let unitValue = currencyUnit[unit];
         let unitAvailable = cid[i][1];
         let unitToGive = 0;
         while (unitAvailable > 0 && change >= unitValue) {
             change -= unitValue;
             change = Math.round(change * 100) / 100;
             unitToGive += unitValue;
             unitAvailable -= unitValue;
         }
         if (unitToGive > 0) {
             changeArray.push([unit, unitToGive]);
         }
     }
 
     // If change cannot be given with the available denominations
     if (change > 0) {
         return { status: "INSUFFICIENT_FUNDS", change: [] };
     }
 
     return { status: "OPEN", change: changeArray };
 }
 
  
 
 
 console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));