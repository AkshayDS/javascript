// let a = 32;
// let b = 10;

// try{
//     console.log(division(a,b))
// }catch(e){
//     console.log(e)
// }

// function division(a,b){
//     if(b==0){
//         throw new Error ("cant be zero")
//     }else{
//         return a/b;
//     }
// }

// const addi = (a,b)=>{
//     console.log(a+b);
//     console.log(a*b);

// }

function vowels(str){
    let count =0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;

        }

    }
    return count;
}


   

