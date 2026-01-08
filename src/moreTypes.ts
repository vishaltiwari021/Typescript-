//Here We Learn ForceFull Type Assertion:-

let response:any = "42"

let numericLength:number = (response as string).length;//this isforcefull type assertion.

type Book={
    name: string
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);
//Any and Unknown----------------------------------------
let value:any;

value="vishal"
value =[1,2,3]
value = 2.4
value.toUpperCase()

let Newvalue:unknown;

Newvalue =[1,2,3]
Newvalue = 2.4
Newvalue="vishal"
// Newvalue.toUpperCase() here it gives error
if(typeof Newvalue === "string"){
    Newvalue.toUpperCase()
}
//-------------------------These are safety checkes----------------------------------------
//try and catch block:-

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error",error);
    
}

const data:unknown ="vishal tiwair is good boy"
const strData:string = data as string

//-----------------------------never-------------------------------

type Role = "admin" | "user"

function redirectBasedOnRole(role:Role){
    if(role ==="admin"){
        console.log("Redirec to the admin dashboard");
        return
        
    }
    if(role ==="user"){
        console.log("Redirec to the user dashboard");
        return
        
    }
    role;
}