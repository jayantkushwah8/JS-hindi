let myDate = new Date()
// console.log(myDate.toString());//Sun Aug 13 2023 10:34:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sun Aug 13 2023
// console.log(myDate.toLocaleString());//8/13/2023, 10:34:22 AM

// let myCreatedDate = new Date(2023,11,23) //12/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1691940079576
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));The Date.now() static method returns the number of milliseconds elapsed
// since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time `)

newDate.toLocaleString('default', {
    weekday: "long",
    
})