//const coding=["js","html","java","py","cpp"]
//console.log(coding)

//coding.forEach(function(val){
//      console.log(val)
//})

//coding.forEach((val)=>{
  //  console.log(val)
//}
//)

function print(item){
 //   console.log(item)
}

//coding.forEach(print)

//coding.forEach((item,index,arr)=>{
//console.log(item,index,arr)
//})

const coding=[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    }
]

// coding.forEach((item)=>{
//     console.log(item.languageName)
// })

// let index=0
// while(index<=10){
//     console.log(index)
//     index=index+2
// }

// let i=0
// myArr=["java","js","py"]
// while(i<myArr.length){
// console.log(myArr[i])
// i++
// }

// let i=1
// do{
// console.log(i)
// i++
// }while(i<=10)

// const arr=[1,2,3,4,5]
// for(i of arr){
//     console.log(i)
// }

// const greetings="hello"
// for(i of greetings){
//     console.log(i)
// }

const map=new Map()
//key-value 
map.set("IN","INDIA")
map.set("FR","FRANCE")
map.set("USA","UNITED STATE OF AMERICA")
map.set("UK","UNITED KINGDOM")

//console.log(map)

// for(const [key,value] of map){
// console.log(key,value)
// }

const obj={
    name:"myobj",
    type:"object"
}

//console.log(obj)
for(const key in obj){
 //   console.log(key,obj[key])
}

//  myArr=["java","js","py"]
//  for(i in myArr){
//     console.log(myArr[i])
//  }

for(const key in map){ //not print 
    console.log(key)
}

myArr=["java","js","py"]
// myArr.forEach((val)=>console.log(val)
// )

// const values = myArr.forEach( (item) => {
                                       //op:- undefined
//     return item
// } )
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nums=myNums.filter((val)=>{
//     return val>4
// })
// console.log(nums)

// const newNums=[]
// const num=myNums.filter((val)=>{
//     if(val>4)
//     newNums.push(val)
// })
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const mybooks=books.filter((bk)=>bk.genre=='History')
//   console.log(mybooks)

//   const mybooks=books.filter((bk)=>{
//     return bk.genre=='History'&&bk.publish>1990
// })
//   console.log(mybooks)

// const Nums = myNums
//                 .map((val)=>val*10)
//                 .map((val)=>val+1)
//                 .filter((val)=>val>50)

//call by function forEach,map,filter
const Nums = myNums.map((val)=>val*10)


console.log(Nums);
