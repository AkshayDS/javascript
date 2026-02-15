// odd or even ----------

// const { useIsPresent } = require("framer-motion");

/*
let a = 9;
if(a%2==0){
    console.log(a, "It is a even number");
}
else{
    console.log(a, "It is a odd number")
}
    */

// positive or negetive-----
/*
let a = 0;
if(a>=1){
    console.log("It is a positive number");
}
else if(a==0){
    console.log("It is 0")
}
else{
    console.log("It is a negetive number")
}
    */
/*
let num =101;
function reverse(num){
    let reverse =0;

    while (num){
        let temp =num%10;
        reverse = (reverse*10) + temp;
        num = parseInt(num/10);
    }
    return reverse;
}
console.log(reverse(num));
let b = reverse(num)
if(b==num){
    console.log("It is a palandrome")
}
else{
    console.log("It is not a palandrome")
}


let arr = [1,2,3,4,5,6,8,7,9];
let key = 5;
isPresent=false;
arr.forEach(element => {
    if(element==key){
        isPresent=true;
    
    }
});
if(isPresent){
    console.log("It is present")
}else{
    console.log("not")
}

*/

let a = [2,3,4,5];
for (let i = a.length-1;i>=0;i--){
    console.log(a[i]);
}
