// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = 23423
tinderUser.name = "jayant"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email : 'jayant@gmail.com',
    fullname : {
        userName : {
            firstName : "Jayant",
            lastName : "Kushwah"
        }
    }
}
// console.log(regularUser.fullname.userName.firstName);


const obj1 = { 1:'a' , 2:'b'}
const obj2 = { 3:'a' , 4:'b'}
const obj3 = { 5:'a' , 6:'b'}

const obj = {...obj1 , ...obj2 , ...obj3}  //all object element into one 
// console.log(obj);

const user = [
    {
        id : 1,
        email : 'jayant@gcom'
    },
    {
        id : 1,
        email : 'jayant@gcom'
    },
    {
        id : 1,
        email : 'jayant@gcom'
    }
]
// console.log(user[1].email);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    course : "chai aur js",
    price : 0,
    instructor : "hitesh"
}

//destructuring=  {}
console.log(course.instructor);
const {instructor : inst} = course //we are fetching from course...inst is variable we stored value of course.instructor

console.log(inst);

//object without name = json

[
    {},
    {},
    {}
]