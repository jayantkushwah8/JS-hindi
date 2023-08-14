const name = "jayant";
const num = 23;
// console.log(`My name is ${name} and I am ${num} old`);

const gameName = new String('jayant-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newSt1 = gameName.substring(0,3)
// console.log(newSt1);

const newSt2 = "    jayant     "
// console.log(newSt2);
// console.log(newSt2.trim());


const newSt3 = "ksjfsfowfjoi"
console.log(newSt3.slice(2,5));
console.log(newSt3)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));