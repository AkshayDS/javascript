//console.log("Before 1clk complete 2 videos")

// example 1 if , else, else if ladder-------------------

/*
let salaray = 1;

if(salaray>=20){
    console.log("can buy Z900");
}
else if(salaray<=20, salaray>=10){
    console.log("can buy gt650");
}
else if(salaray<=10,salaray>=5){
    console.log("can buy x pulse");

}
else if(salaray<=0){
    console.log("first earn money");

}
else{
    console.log("can buy splendor");
}
*/

// example 2 nested if ------------

/*
let salaray = 8;
let emi =2;

if (salaray>=8){
    if(emi==null){
        console.log("Can buy the liter class bike")
    }
    else{
        console.log("Clear the emi and then buy ")
    }
}
else{
    console.log("you dosnt have a sufficient amount to buy a liter classs bike")
}

*/

// problem 1 ------ voting 

/*
let age = 2;

if (age >= 18){
    console.log("The age is ",age," so the person can eligible to vote");
}
else{
    console.log("The age is ", age,"so the person cant eligible to vote now ");
}

*/

// problem 2 find biggets number -----------

let a = 900;
let b= 400;
let c = 1000;
/*
if (a>b && a>c){
    console.log(" a is greatest")

}
else if(b>c && b>a){
    console.log("b is greatest")

}
else{
    console.log("c is greatest")
}*/
/*
if (a>b){
    if(a>c){
        console.log("a is greatest number");
    }
    else{
        console.log(" C is the greatest number");
    }
}
else if (b > c){
    console.log(" B is greatest number");

}
else if (a ==b , b==c , c==a){
    console.log("all are equal")
}
else {
    console.log("C is the greatest number");
}*/

// switch case ---------------------

let alphabet = "k";

switch(alphabet){
    case 'a' :console.log("It is vowel")
    break;
    case 'e':console.log("It is vowel")
    break;
    case 'i':console.log("It is vowel")
    break;
    case 'o':console.log("It is vowel")
    break;
    case 'u':console.log("It is vowel")
    break;
    default: console.log("it is a consonent");
    break;
}
