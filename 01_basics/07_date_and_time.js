//Dates
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//Object

let newDate=new Date(2023,0,23,5,3); //Months starts from 0 in JavaScript.
// let new_Date=new Date(2023,0,23);
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
let recommended_format_date=new Date("01-14-2023");
let recommended_formatdate=new Date("2023-01-14");
let recommendedformat_date=new Date("14-01-2023");//dd-mm-yy is not supported.
// console.log(recommendedformat_date.toLocaleString());
// console.log(recommended_formatdate.toLocaleString());

// Time Stamp
let myStamp=Date.now()
// console.log(myStamp);// is ms from 1st january 1970 as mentioned in js
// console.log(recommended_format_date.getTime());
// console.log(Math.floor(Date.now()/1000)); //converting the current date from 01-01-1970 in seconds

let newwDate=new Date()
// console.log(newwDate);
// console.log(newwDate.getDate());
// console.log(newwDate.getDay());
// console.log(newwDate.getMonth()+1);
// console.log(newwDate.getFullYear());

// console.log(`${newwDate.getDate()} and the month is ${newwDate.getMonth()+1} and the time is ${newwDate.getTime()}`);
console.log(newwDate.toLocaleString('default',{
    weekday:"long"
}))