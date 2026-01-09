//Objects in TS:-

const chai ={
    name:"vishal",
    cost:30,
    isHot:true
}
//--------------------------------------------------
let tea:{
    name:string,
    cost:number,
    isHot:boolean
}

tea={
    name:"vishal",
    cost:99,
    isHot:false
}
//-------------------------------------------------------

// Alis Object:---------------------------

type Tea={
    name:string,
    price:number,
    ingridients: string[]
}

let adrakchai:Tea={
    name:"AdrakXchai",
    price:55,
    ingridients:["ginger","peapar"]
}
//Duck Typing:---------------------------------------------------

type Cup = {size:string} 

let smallCup :Cup = {size:"200ml"}

let largeCup = {size:"500ml",material:"steel"}

smallCup = largeCup

//-------------------------------------------------------------
//in this case datatype catch the missing value...
type User = {
    name:string,
    password:string
}

const user :User = {
    name:"vishal",
    password:"2345"
}
//---------------------------------------------------
//Split out of Data Type:

type Item = {name:string,quality:number}
type Address = {street:string,pin:number}

type Order = {
    id:string,
    itmes:Item[],
    address:Address
}
//--------------------------------------------------------------------

type Chai = {
    name:string,
    cost:number,
    isHot:boolean
}

const updatedChia = (updates: Partial<Chai>) =>{
    console.log("updates chai",updates);
}
updatedChia({cost:77})
updatedChia({isHot:false})
updatedChia({})// u ccan give like that tooo..


type ChaiOrde ={
    name?:string,
    price?:number
}

const placeOrde = ( order: Required<ChaiOrde>) =>{
    console.log("please order");
    
}

placeOrde({
    name:"ginger tea",
    price:6
})


//ther are two more eg:- pick and omit...