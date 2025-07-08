// let name="saloon"
// anothername=name;
// console.log(name)
// console.log(anothername)

let name="komal"
let rollno=18;
//string interpolation
console.log(`Name of student ${name} and roll no is ${rollno}`)

const surname=new String("ahuja")
console.log(surname)

console.log(surname[0])//a
console.log(surname.__proto__)//{}
console.log(surname.length)//5
console.log(surname.charAt(2))//u
console.log(surname.indexOf('a'))//0

const newstr=surname.substring(0,4)//ahuj
console.log(newstr)

const anotherString = surname.slice(-5, 3)//ahu
console.log(anotherString)

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))




