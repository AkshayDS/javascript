
// array square

/*
let arra = [2,3,4]
arra.forEach((element) => {
    
    console.log(element**2) 
});

*/
// find the prime number

function prime(num){
    if (num<=1) {
        return "Not a prime"  ;  
    }
    for(let i=2; i < num; i++){
        if(num % i=== 0){
            return "Not a prime";
    }
    }
    return "prime";
    
}
console.log(prime(9));

