// Problem 1 to find those who got above 90 marks in the given array
/*
let arr1 = [87,93,64,99,86];
let newarr = arr1.filter((val)=>{
    return val>90;
});
console.log(newarr);

*/

//create a array from 1 - n ---------
/*
let n = prompt("Enter a values ")

let arr=[ ];
for(let i=1;i<=n;i++){
    arr[i-1 ]=i;
    
}
console.log(arr)
*/


let n1 = prompt("Enter a vlaue")
 let arr1 =[]
 for(let i=1;i<=n1;i++){
    arr1[i-1]=i

 }
 console.log("Array =",arr1)

let sum = arr1.reduce((prev,current)=>{
    return prev + current;

});
console.log("sum =",sum);


let fact = arr1.reduce((prev,current)=>{
    return prev * current;

});
console.log("Factorial =",fact);