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

x.fun = sum // f is function
console.log(x.fun(5,5)) // 10
console.log(x['name'].toUpperCase()) // HUMOYUN

const upper = x => x.toUpperCase()

x.upper = upper
console.log(x.upper(x.name)) //HUMOYUN