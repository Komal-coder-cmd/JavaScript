//primtive datatypes: bigint,symbol, number, boolean, string, null, undefinied
const id=Symbol(123)
console.log(typeof id) //symbol

const score=100
console.log(typeof score) //number

const per=100.00
console.log(typeof per) //number

let name="komal"
console.log(typeof name) //string

let rollno
console.log(typeof rollno) //undefined

const city=null;
console.log(typeof city) //object

//Non primitive datatypes:- object, function, array
const arr=[11,22,33,44]
console.log(typeof arr) //object

const myobj={
    name:"komal",
    city:"rollno",
    age:22
}
console.log(typeof myobj) //object

const myfun=function(){
    console.log("hello......")
}
console.log(typeof myfun) //function