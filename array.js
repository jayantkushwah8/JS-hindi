let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [7, 8, 9, 10, 11, 12]
// arr.push(7)      //ADD ELEMENT IN LAST
// arr.push()         //REMOVE ELEMENT FROM LAST
// arr1.unshift(7)    //ADD ELEMENT IN FIRST
// arr1.shift()      //REMOVE ELEMENT FROM FIRST
// console.log(arr1.includes(2));
// console.log(arr1.indexOf(5));

let newArr = arr1.join()
// console.log(newArr); //returns an array as a string | (separator)','is default


// console.log(arr1.slice(0, 2));//create a copy of an array or return a portion of an array.//last index is excluded

// console.log(arr1.splice(1, 3)); //change the original array [ 2, 3, 4 ]
// console.log(arr1);//[ 1, 5, 6 ]

const arr = [...arr1 , ...arr2] 
// console.log(arr);

let arr3 = [1, 2, 3, 4, 5, 6, 7, [8, 9, 10, 11, 12, [13, 14,[15]]]];
// console.log(arr3.flat(Infinity)); //flat(Infinity) returns an array of all the elements in the original array.
//for data scrapping
console.log(Array.isArray([1,2,3])) // returns a boolean that indicates whether its array or not
console.log(Array.from("Jayant")) // converts into array from string or object
console.log(Array.from({name: "hitesh"})) // interesting we have to specify 
let n1 = 10;
let n2 = 20;
let n3 = 30;
console.log(Array.of(n1, n2, n3)); //returns array from elements
