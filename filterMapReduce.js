let myArray = [1,2,3,4,5,6,7,8,9,0]

//-----------------filter used to filter ------------------

// const num5 = myArray.filter( (item) => item > 5)
const num5 = myArray.filter( (item) => {
    return item > 5
})
// console.log(num5);

let num4 = []
myArray.forEach( (item) => {
    if(item > 4){
        num4.push(item)
    }
})
// console.log(num4);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (item) => item.genre === 'History')
  let userBooks = books.filter( (item) => {
    return item.genre === 'History' && item.publish === 1999    //using {} so we have to return it
    })
//   console.log(userBooks);

  //--------------map used to peform operations------------------

  let newArray = myArray.map( (item) => item*10 )
//   console.log(newArray);

  let newNums = myArray
  .map( (item) => item*10)
  .map( (item) => item+1)
  .filter(  (item) => item >50)
                
//   console.log(newNums);

//---------------reduce-----------------------------------------

let cartPrice = [133,553,65]
let initialValue = 0    
// cartPrice.reduce( function (prev,curr) prev + curr , 0 )   
const myTotal = cartPrice.reduce( (previousValue,currentValue) => {
    return previousValue + currentValue ;   //first previousValue = initialValue then addition of both value assigned to previousValue till last element
}, initialValue)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (prev , curr) => prev + curr.price ,0 )     //curr.price

// console.log(priceToPay);