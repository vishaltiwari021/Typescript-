// *******************Type Annotation and Inference in TS********************************

// Type Annotation (Explicit Typing):Annotation means you explicitly tell TypeScript what the type is.

let color:string = "red"
color = "pink"
//examples:
//1)Variable Annotation:
let age: number = 21;
let firstname: string = "Vishal";
let isLoggedIn: boolean = true;

//2)Function Annotation:
function add(a: number, b: number): number {
  return a + b;
}
//3)Object Annotation:
let user: {
  name: string;
  age: number;
} = {
  name: "Vishal",
  age: 21
};
//4)Array Annotation:
let numbers: number[] = [1, 2, 3];
let names: string[] = ["A", "B"];



// Type Inference (Automatic Typing):Inference means TypeScript automatically figures out the type based on the value.

let drink = "softdrink"

let cups = Math.random() >0.5? 10: 5

let name  = "vishal"