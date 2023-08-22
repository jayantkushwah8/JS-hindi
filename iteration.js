// [{},{},{}]
// ['','',""]

// ------------for of is used to iterate in the array/string-----

let arr1 = [1,2,3,4,5,6,7,8,9,0]
for (const num of arr1) {
    // console.log(num);
}

const string = "jayant is awesome"
for (const str of string) {
    // console.log(`Each char is ${str}`);
}

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 
// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ':-' , value); 
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}
//  for (const [key,value] of myObject) {
//     console.log(key , ':-' , value);   //myObject is not iterable
//  }
   

//----------------for in is used to iterate objects , arrays---------------

const language = {
    js : 'Javascript',
    cpp : "c++",
    py : "Python",
    java : "Java"
}

for (const key in language) {
    // console.log(`${key} :- ${language[key]}`);    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);     //key is index is value
}
for (const key in map) {
    // console.log(key);    //no output for maps
}

//-----------for each is used to iterate array which contains objects or string----------------

const lang = ['javascript','html','c','java','golang']
// lang.forEach( (item) => console.log(item))
function printMe(item){
    // console.log(item);
}
lang.forEach(printMe)  //just give reference dont execute i.e. printme()

lang.forEach( (item , index , arr) => {
    // console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
})

const coding = lang.forEach( (item) => {
    console.log(item);
    return item            //foreach does not return anything
} )
// console.log(coding);

