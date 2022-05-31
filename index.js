// // let i = [..."chapter_8"]
// // let upper = ''
// // i.forEach(item => upper += item.toUpperCase())
// // console.log(upper)


// function sum(a=3, b=6){
//     return a + b
// }

// console.log(sum()) // 9


// const sum_2 = (a=5,b=5) => a+b
// console.log(sum_2(5,5)) // 10


// let x = {
//     name: 'humoyun',
//     age: 19
// }

// x.fun = sum // f is function
// console.log(x.fun(5,5)) // 10
// console.log(x['name'].toUpperCase()) // HUMOYUN

// const upper = x => x.toUpperCase()

// x.upper = upper
// console.log(x.upper(x.name)) //HUMOYUN


// const array = (x, y) => {
//     return x[0] + y[0]
// } 
// console.log(array([2,3], [3,4])) // 5

// const obj = ({x, y}, obj) => {
//     return { x: y * obj, y: x * obj}
// } 

// console.log(obj({x:4, y:3}, 4)) // x = 12, y = 16 

// let x =6
// function y(){
//     let x =4
//     function z(){
//         return x
//     }
//     return z()
// }

// console.log(y())  // 4


// function counter (y,...numbers){
//     return numbers.reduce((x, y) => x+y,0) + y
// }

// console.log(counter(1   ,1,2,3,4,5,6)) //22

// function filter(...numbers){
//     return numbers.filter(item => item>4)
// }
// console.log(filter(1,2,3,4,6,5,7,8,9,5,6,7))
// console.log(y=[...new Set(filter(1,2,3,4,6,5,7,8,9,5,6,7))])

// console.log('hello world')

// console.log(filter.call(counter))

function x(){
    return this.x / this.y 
} 
let obj = {
    x:32,
    y:2
}

let g = x.bind(obj)
console.log(g())  // 16
const y = (x,y) =>{
    return x + y
}

let t = y.bind(1,3)
console.log(t(2)) //5 x = 3, y = 2