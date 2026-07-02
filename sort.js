// const frouts = ['banana', 'apple', 'orange'];
// frouts.sort()
// // console.log(frouts)

// const numbers = [1, 5, 3, 2, 6, 8, 11, 10];
// //  numbers.sort((a,b) => a-b)
// // console.log(numbers)
// numbers.sort((a, b) => b - a);
// console.log(numbers)



// numbers.sort((a,b)=>a-b)
// const numbers = [12, 98, 5, 41, 23, 78, 46];

// let even = []
// for (const num of numbers) {
//     if (num % 2 === 0) {
//         even.push(num)
//     }
// }
// console.log(even)


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'] 
 
let result= '';

for(const name of numbers){
   console.log(name);
   result += name
}
console.log(result)
