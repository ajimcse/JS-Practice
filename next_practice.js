// function double(num){
//     const result =num *2
//     return result
// }
// const resul=double(5)
// console.log(resul)

// function maxNumber(numbers) {
//     let max = numbers[0]
//     for (const num of numbers) {
//          if(max < num){
//             max =num
//          }
//     }
//     return max;

// }
// const resul = maxNumber([12, 43, 65, 31, 111, 54, 76, 11, 86, 1, 99]);
// console.log(resul)


// function evenNumber(numbers){
//     let even =[]
//   for(const num of numbers){
//     if( num % 2 ===0){
//         even.push(num)
//     }
//   }
//   return even
// }
// const resul = evenNumber([12, 43, 65, 31, 111, 54, 76, 11, 86, 1, 99]);
// console.log(resul)
// const computer ={
//     brand:'lenovo',
//     price:25000,
//     processor:'Intel',
//     hdd:512,

// }
// function computerPrice(cmt){
//  const cmtPrice =cmt.price
//  return cmtPrice
// }
// const resul=computerPrice(computer);
// console.log(resul)

// function numbersCheck(names) {

//     for (const num of names) {
//         if (num >= '0' && num <= '9' && num < 'A' && num > 'Z') {
//             return true
//         }

//     }
//     return false

// }
// const resul = numbersCheck('AJIM123');
// console.log(resul)


const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Phone", price: 65000 }
];
function productMinPrice(products) {
     let pp=[]
    for (const product of products) {
        const productPrice = product.price
        if (productPrice < 1000) {
            pp.push(product)

        }
    }
    return pp

}
const resul = productMinPrice(products);
console.log(resul)
