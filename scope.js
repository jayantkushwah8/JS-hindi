// console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5) intersting
const addTwo = function(num){
    return num + 2
}

//we can access variable outside of scope but can not access outide the scope which is declared inside of scope 

if(true){
    let name = 'jayant'
    if(name === 'jayant'){
        console.log(`Hello ${name}!`);
    }
}