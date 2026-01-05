//Union And Any In TS:
// A union type means a variable can have one of multiple specific types.
let subs:number|String ='1M'

let apiRequest:'pending'|'success'|'error' ='pending'

let airlineSeat:'aisle'|'middle'|'window'= 'middle'

// any means turn off TypeScript checking.

let value: any;

value = 10;
value = "hello";
value = true;

// we avoid the (any) in the code mostly