const products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Watch", price: 5000 },
  { id: 4, name: "Headphone", price: 3000 },
  { id: 5, name: "Keyboard", price: 2500 },
  { id: 6, name: "Mouse", price: 1500 }
];
const cheap =  products.filter( product => product.price 
    >1500);
console.log(cheap)