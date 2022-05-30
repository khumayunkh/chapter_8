// let i = [..."chapter_8"]
// let upper = ''
// i.forEach(item => upper += item.toUpperCase())
// console.log(upper)


function sum(a=3, b=6){
    return a + b
}

console.log(sum()) // 9


const sum_2 = (a=5,b=5) => a+b
console.log(sum_2(5,5)) // 10


let x = {
    name: 'humoyun',
    age: 19
}

x.fun = sum // f is function
console.log(x.fun(5,5)) // 10
console.log(x['name'].toUpperCase()) // HUMOYUN

const upper = x => x.toUpperCase()

x.upper = upper
console.log(x.upper(x.name)) //HUMOYUN


const array = (x, y) => {
    return x[0] + y[0]
} 
console.log(array([2,3], [3,4])) // 5

const obj = ({x, y}, obj) => {
    return { x: y * obj, y: x * obj}
} 

console.log(obj({x:4, y:3}, 4)) // x = 12, y = 16 