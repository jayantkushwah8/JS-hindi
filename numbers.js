const num = 300
// console.log(num);

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//decimal ke baad kitni digit chahiye

const num2 = 23.543534
// console.log(num2.toPrecision(4));//kitni digit chahiye total point ke dono taraf

const hundred = 100000000
// console.log(hundred.toLocaleString('en-IN'));//indian system me number likhega

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-16-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.floor(Math.random()*100) + 1);

const min = 23
const max = 100
console.log(Math.floor(Math.random()*(max-min+1))+min);