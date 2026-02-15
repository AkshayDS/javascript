/*

console.log("day 3 sec video about object and class")

let Signup = {
    firstName : "Akshay",
    secondName : "D S",
    password : "abc@123",
    work :()=>{
        return "I am a student";

    },
    skills : new Array('Web','Py','gph_dsn'),

} 
console.log(Signup.firstName)
console.log(Signup.work());
console.log(Signup.skills);

*/



// clases----

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    skills(){
        console.log(`"${this.name} he is a skilled person"`)
    }
}

let obj = new Person("Akshay",21);
obj.skills();