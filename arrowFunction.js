const user = {
    name : 'jayant',
    work : 'web dev',
    welcomeMessage : function(){
        console.log(`${this.name} , Welcome to this website`);
        console.log(this);
    }
}
// user.welcomeMessage()
user.name = "jayu"
// user.welcomeMessage()
//this refers to the current context
// console.log(this);

// --------------------arrow function-------------------

// const addTwo =  ( n1,n2 ) => n1+n2
// const addTwo =  ( n1,n2 ) => (n1+n2)
// const addTwo =  ( n1,n2 ) => ({username : "jayant"})
const addTwo =  ( n1,n2 ) => {return n1+n2}  // we are opening scope ie{} so we have to return it
console.log(addTwo(3,4))


//-----------------immediately invoked function expression iife-----------------

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')