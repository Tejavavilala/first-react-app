import { Person } from "./Person"


function getFirstElement<ElementType>(array:ElementType[])
{
  return array[0]
}

const num=[1,2,3]
const firstnum=getFirstElement(num)

const str=['abc','def','ghi']
const firststr=getFirstElement(str)


let name:string;
let age:number;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string];//tuple

// type Person={
//   name:string,
//   age?:number
// }
// let person:Person={
//   name:"teja",
// }

