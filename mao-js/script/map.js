// using normal map ...
/*
let arr = [1,2,3,4];

arr.map((val)=>{
    console.log(val);

});
*/

// using return function
/* 
let arr = [1,2,3,4]

let newone= arr.map((val)=>{
    return val*val;
});

console.log(newone);
*/

// use a filter method -------- to filter the even number in the array.........
/*
let Ara=[2,3,4,6,5,7,8,9,0]

let newAR = Ara.filter((val)=>{
    return val%2===0;
})
console.log(newAR)
*/

// use reduce method ---------- and cal the sum of the array-----
/*
let array1 = [ 1,2,3,4,5,6]

let newArray = array1.reduce((result,current)=>{
    return result+current;
})

console.log(newArray);

*/

// use reduce fing a largest in the array-----

let array1 = [ 0,7,1,2,3,4,5,6]

let newArray = array1.reduce((result,current)=>{
    return result > current ? result: current;
});

console.log(newArray);