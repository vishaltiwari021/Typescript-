//lear more types and about Interface:-
type Chaiorder={
    type:string,
    usgar:number,
    strong:boolean
}
function makeChai(order:Chaiorder){
    console.log(order);   
}
function serveChai(order:Chaiorder){
    console.log(order);   
}

type teaRecipe ={
    water:number,
    milk:number
}
 class MasalaChai implements teaRecipe{
    water= 100;
    milk= 50;
 }
//use interface in classes mostly:
 interface CupSize{
    size:"small"|"large"
 }

 class Chai implements CupSize{
    size: "small" | "large"= "large";
 }