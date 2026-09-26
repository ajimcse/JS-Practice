const numbers= [10,20, 30, 40 ,50, 60];
const result = numbers.map((number) =>{
    return number  * 2
})
// console.log(result)

const users = [
  { name: "Ajim", age: 25 },
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 30 }
];
const names = users.map((user) =>{
    return user.name;
})
// console.log(names)
const products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Watch", price: 5000 }
];
 products.forEach( product => {
    // console.log(product.name)
    // console.log(product.price)
})

// const product = products.map((product) =>{
//     return product.price
// })
// console.log(product)
 products.forEach(product => console.log(product))
products.forEach( product => {
    // console.log(product.name)
    // console.log(product.price)
})
 