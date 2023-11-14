//1

// let num=5
// let srt='hi'
// let bool=true

// console.log(num)
// console.log(srt)
// console.log(bool)

//2
// let num=5
// console.log(num.toString())
// let srt =+'5'
// console.log(srt)

//3
// let arr= [1,2,3,4,5]
// for(let i in arr){
//     console.log(arr[i])
// }

//4
// let obj={
//     name:'Nuris',
//     age:19,
//     city:'BIshkek'

// }

// console.log(obj)


//5
// let num= prompt('enter the number: ')
// if(num%2===0){
//     console.log('This is even number')
// }else{
//     console.log('This is odd number')
// }

//6
// let fn =()=>{
//     console.log('Hello world')
// }
// function fn1(){
//     console.log('Hello world')
// }
// let fn2=function(){
//     console.log('Hello world')
// }
// fn()
// fn1()
// fn2()

//8
// const promise=new Promise((onRes,onRej)=>{
//     if(Math.random() > 0.5) {
//                 setTimeout(() => {
//                     onRej('Failed')
//                 }, 1000)
//             } else {
//                 setTimeout(() => {
//                     onRes('Success')
//                 }, 1000)
//             }
// })

// promise.then(res=>console.log(res))
// .catch(error=>console.log(error))


//допольнительные 
//1
// function fn(arr){
//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     const average = sum / arr.length;
//     console.log(average)
// }

// fn([1,2,3,4,5])

//2
// function fn(arr){
//     let newArr=arr.map(elem=>{return elem.toUpperCase()})
//     console.log(newArr)
// }
// fn(['hello','world','hi'])

//3
// function fn(a,b){
//     return a.age - b.age;

// }
// let arr=[{
//     name:'Nuris1',
//     age:19
// },{
//     name:'Nuris2',
//     age:14
// },{
//     name:'Nuris3',
//     age:22
// }
// ]
// arr.sort(fn)
// console.log(arr)

//4
function getUniqueNumbers(arr) {
    return arr.filter((number, index, array) => array.indexOf(number) === index);
}


const numbers = [1, 2, 3, 4, 2, 5, 6, 1];
getUniqueNumbers(numbers)

console.log(getUniqueNumbers(numbers)
)


//5
// function fn(a,b){
//    return a.name.localeCompare(b.name)
    
// }
// let arr=[{
//     name:'Arsen',
//     age:14
// },{
//     name:'Nuris',
//     age:22
// },{
//     name:'Burulai',
//     age:19
// }
// ]
// arr.sort(fn)
// console.log(arr)

//6
// function fn(arr) {
//     let newArr = arr.filter((elem) => {
//         return elem % 2 === 0
//     });

//     return newArr
// }

// const result = fn([1, 2, 3, 4, 5, 6, 7, 8])
// console.log(result)

//7
// const arr = [
//     {
//         name: 'aidar',
//         salary: 55000
//     },
//     {
//         name: 'arlan',
//         salary: 20000
//     },
//     {
//         name: 'arlen',
//         salary: 1000000
//     }
// ]
// function fn(arr){
// const findedElem = arr.filter((elem) =>elem.salary > 50000)
// return findedElem
// }
// console.log(fn(arr)
// )

//8
// const arr = [1,45,23,11,14,5]

// function fn(arr){
// const findedElem = arr.filter((elem) =>elem > 10 && elem<20 )
// return findedElem
// }
// console.log(fn(arr)
// )

//9
// const arr = ['helllo','hi','hey','world']

// function fn(arr){
// const findedElem = arr.filter((elem) =>elem.length>=5 )
// return findedElem
// }
// console.log(fn(arr))

//10
// function fn(arr){
//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     const average = sum / arr.length;
//     const ff=arr.filter((elem)=>elem>average)
//     console.log(ff)
// }

// fn([1,2,3,4,5])

//11
// const arr = [
//     {
//         name: 'aidar',
//         salary: 55000,
//         completed:true
//     },
//     {
//         name: 'arlan',
//         salary: 20000,
//         completed:true

//     },
//     {
//         name: 'arlen',
//         salary: 1000000,
//         completed:false

//     }
// ]

// function fn(arr){
// const findedElem = arr.filter((elem) =>elem.completed===true )
// return findedElem
// }
// console.log(fn(arr))