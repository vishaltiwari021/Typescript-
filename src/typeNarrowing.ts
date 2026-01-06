// In TypeScript, type narrowing and type guards are how you safely work with union types by telling TypeScript which exact type you’re dealing with at runtime.

// Type narrowing is the process of refining a broad type (like string | number) into a more specific type (like just string).

function getchai(kind:string|number){
    if(typeof kind === "string"){
        return `Making ${kind} of chai`;
    }
    return ` chai order : ${kind}`;
}

function serveChai(msg?: string){

    if(msg){
        return` Serving ${msg}`
    }
    return `Serving default masala chai`
}

// Type Guards (How Narrowing Happens):

// A type guard is a runtime check that narrows the type inside a block.

// Built-in Type Guards (Most Important):typeof;instanceof;in Operator;Discriminated Unions;Custom Type Guards

class KulhadChai{
    serve(){
        return ` Serving KulhadChai`
    }
}
class CuttingChai{
    serve(){
        return ` Serving CuttingChai`
    }
}

function serve(chai:KulhadChai|CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

// Custom Type Guards : You can create your own type guard functions using is.