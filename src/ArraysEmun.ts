//Here we discuss about he arrats , enums, tuples, etc..

//Array:--

const color:string[] = ["red","gree","blue"];
const price :number[] = [1,4,6,8,9]

const rating : Array<number> = [3.4,6.7,5.0]

//Array in object type:---

 type chai ={
    name:string;
    price:number
 }

 const menu : chai[] = [
    {name:"masala chai",price:20},
    {name:"ginger chai",price:24},
 ]

 //ReadOnly Array:--

 const cities: readonly string[] = ["mathura","agra"]

 //MultiDArray:-

const tabel :number[][] =[[12,23,4],[5,67,8,9]]

//Tuples:----------------------------------
 let chaiTuple : [string,number]
 chaiTuple = ["masala chai",44]//order is mentained in the tuples of data types......
//  we can not do this:chaiTuple = [55,"masala chai"] ....

// readonly tuples:-

const location : readonly [number,number] = [33.44,44.89]

//named tuples:--
 const chaiItems :[name:string,price:number] = ["masala",70]

 //Enums:--
 enum cupSize {
    SMALL,
    LARGE,
    MEDIUM
 }

 const size = cupSize.LARGE

 enum chaiType {
    MASALA= "masala",
    GINGER = "ginger"
 }

 function  makeChai(type:chaiType){
    console.log(`making chia of ${type}`);
 }
makeChai(chaiType.GINGER)

