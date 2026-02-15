console.log("This is function topic")

// function topic---------------
/*
function myname(name, age){
    console.log(name, age);
    if(age>=18){
        return "Eligible to vote"
    }
    else{
        return "cant eliigble to vote"
    }

}

let a = myname("Akshay ", 18)
console.log(a);
*/
/*
function returnOne(one){
    if(one==1){
        return 1;

    }else{
        return returnOne(one-1);
    }
}

let a = returnOne(10);
console.log(a);
*/

//  problem 1 ------------ factorial of a number

function fact(a){
    if(a<=1){
        return 1;
    }
    else{
        return a*fact(a-1);
    }
}

let x = fact(5);
console.log(x);