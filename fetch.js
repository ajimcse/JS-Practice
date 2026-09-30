const student = {
    name: 'ajim',
    id: 8400,
    adddres: 'Pabna'
}
// console.log(student)
// const  studentJSON=JSON.stringify(student);
// console.log(studentJSON);
// const studentObje = JSON.parse(studentJSON)
// console.log(studentObje)
const products = [
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Watch", price: 5000 }
];
console.log(products)
const addProudts = 
    {
        id: 4,
        name: 'camara',
        price:500,
    }

const newProducts = [...products, addProudts]
console.log(newProducts)
const remaining= newProducts.filter(p => p.name !=='Phone')
console.log(remaining)