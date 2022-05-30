// let i = [..."chapter_8"]
// let upper = ''
// i.forEach(item => upper += item.toUpperCase())
// console.log(upper)


function sum(a=3, b=6){
    return a + b
}

console.log(sum()) // 9


const sum_2 = (a,b) => a+b
console.log(sum_2(5,5)) // 10


let x = {
    name: 'humoyun',
    age: 19
}

x.fun = sum() // f is not function
console.log(x.fun) // 9