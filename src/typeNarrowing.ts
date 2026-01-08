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
        return `Serving KulhadChai`
    }
}
class CuttingChai{
    serve(){
        return `Serving CuttingChai`
    }
}

function serve(chai:KulhadChai|CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

// Custom Type Guards : You can create your own type guard functions using is.
type ChaiOrder={
    type:string,
    sugar:number
}
 function isChaiorder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" && obj!== null &&
        typeof obj.type ==="string" &&
        typeof obj.sugar ==="number"
    )
 }

 function serveChaiOrder(item:ChaiOrder|string){
    if(isChaiorder(item)){
        return ` Serving ${item.type} chai with${item.sugar} sugar`
    }
    return `Serving  custom chai ${item}`
 }

 type MasalaChai = {type:"masala",spicelevel:number};
 type ElaichiChai = {type:"elaichi",aroma:number};
 type GingerChai = {type:"ginger",amount:number};

 type Chai = MasalaChai | GingerChai |ElaichiChai

 function Makechai(orede:Chai){
    switch (orede.type) {
        case "masala":
            return `Serving masala chai`
        case "ginger":
            return `Serving ginger chai`
        case "elaichi":
            return `Serving elaichi chai`
    
    }
 }