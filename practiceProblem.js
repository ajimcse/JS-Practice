// var myMoney = 1000;
// var orangPrice =400;
// var applePrice =300;
// var totalCost=orangPrice +applePrice;
// // console.log(totalCost);
// var reutenCost = myMoney -totalCost;
// // console.log(reutenCost)

// var math=75.25;
// var bangle=65;
// var biloge=80;
// var chemistry=35.45;
// var physics=99.50;


// var totalMarks = math + bangle + biloge+ chemistry + physics ;

// // console.log(totalMarks)
// var avarege = totalMarks /5;

// // console.log(avarege.toFixed(2))
// var myMoney2 = 119

// var remaingCost = 119 % 5
// console.log(remaingCost)


// প্রশ্ন ১

// একজন মানুষের মাসিক আয় (salary) অনুযায়ী মেসেজ দেখাও:

// যদি আয় ১,০০,০০০ টাকা বা তার বেশি হয় → "ধনী"
// নাহলে যদি আয় ৫০,০০০ টাকা বা তার বেশি হয় → "মধ্যবিত্ত"
// নাহলে যদি আয় ২০,০০০ টাকা বা তার বেশি হয় → "নিম্ন মধ্যবিত্ত"
// নাহলে → "গরিব"

// const salary =200001;

// if(salary >=100000){
//     console.log('D')
// } else if(salary >=50000){
//     console.log("M")
// } else if(salary >= 20000){
//     console.log('N M')
// }
// else{
//     console.log('G')
// }

// একজন মানুষের ঘুমের সময় (sleepHour):

// ৮ ঘণ্টা বা তার বেশি → "পর্যাপ্ত ঘুম"
// ৬ ঘণ্টা বা তার বেশি → "মোটামুটি ঘুম"
// ৪ ঘণ্টা বা তার বেশি → "কম ঘুম"
// নাহলে → "খুব কম ঘুম"
// const sleepHour = 5;
// if(sleepHour >= 8){
//     console.log('onek vlo gum')
// } else if(sleepHour >= 6){
//     console.log('motamati gum hoyce')
// } else if(sleepHour >= 4){
//     console.log('Kom hoyce gum ')
// } else{
//     console.log('khum kom gum tmi beshi kore gumao')
// }

// totalPrice অনুযায়ী ডিসকাউন্ট দেখাও:

// ১০,০০০ বা বেশি → "২০% ডিসকাউন্ট"
// ৫,০০০ বা বেশি → "১০% ডিসকাউন্ট"
// ১,০০০ বা বেশি → "৫% ডিসকাউন্ট"
// নাহলে → "কোনো ডিসকাউন্ট নেই"

// const price = 1000;
// if(price >=1000){
//     const discount =price *20 /100;
//     const payAmount =price -discount
//     console.log(payAmount)
// } else if( price > 5000){
//     const discount = price *10  /100;
//     const payAmount =price -discount;
//     console.log(payAmount)
// } else if( price > 1000){
//     const discount = price * 5 /100;
//     const payAmount = price - discount
//     console.log(payAmount)
// }
//  else{
//   console.log('No Ser')
// }

// প্রশ্ন ৬ (একটু ভাবতে হবে): পরীক্ষা + উপস্থিতি

// একজন ছাত্রের marks এবং attendance আছে।

// যদি marks >= 80 এবং attendance >= 75 হয় → "Scholarship"
// যদি marks >= 50 এবং attendance >= 60 হয় → "Pass"
// নাহলে → "Fail"

// const marks = 85;
// const attendance=80
// if(marks >= 80 && attendance >= 75){
//     console.log('Scholarship')
// } else if( marks >= 50 && attendance >= 60){
//     console.log('pass')
// } else{
//     console.log('fail')
// }

// const age =2;
// const cgpa =3.7;
// if( age >=21 && cgpa >=3.5){
//     console.log('Eligible')
// } else {
//     console.log('NOt Eligible')
// }
// const age = 20;
// const money = 500;
// if(age >= 18 && money >= 300){
//     console.log('Movie dekhte jabe')
// } else{
//     console.log('jaite parbe nah tmi bacca')
// }


// const javascript=['I', 'Love', 'JS'];

// let jslove='';

// for(const js of javascript ){

//     jslove += js
// }
// console.log(jslove)

// const letters =['a', 'b', 'c', 'd'];

// let word= '';
// for(const letter of letters){
//     // console.log(letter)
//     word += letter
// }
// console.log(word)

// const numbers =[10,20,30,40];

// let sum =0;

// for(const num of numbers){
//      sum = sum + num
// }
// console.log(sum)

const names = ['Tom', 'Tim', 'Tin'];

// console.log(names.join('-'));


const frouts = ['Apple', 'Banana', 'Orange']

let count = 0;
for (const foots of frouts) {

   count++
}
//  console.log(count)

function singleNumber(numbers) {
   let count = 0
   for (const number of numbers) {
      if (number === 5) {
         count++
      }
   }
   return count;

}
// const numbers = [5,6,11,12,98, 5]
// const result =singleNumber(numbers);
// console.log(result)
function stringCount(string) {
   let count = 0;
   for (const str of string) {
      count += str.length

   }
   return count

}
// const string ='pabna'
// const result =stringCount(string)
// console.log(result)
function getMax(num1, num2) {
   if (num1 > num2) {
      return num1
   }
   else {
      return num2
   }
}
// const result =getMax(111,500);
// console.log(result)

const ajim = 90;
const sorkar = 65;
const kalam = 89;
if (ajim > sorkar && ajim > kalam) {
   // console.log(' ajim boro')
} else if (sorkar > kalam && sorkar > ajim) {
   // console.log('sorkar boro')
} else {
   // console.log('kalam boro')
}

function maxOfThreeNumber(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) {
      return 'num1 boro'
   } else if (num2 > num1 && num2 > num3) {
      return 'num2 boro'
   }
   else {
      return 'num3 boro'
   }
}
// const result =maxOfThreeNumber(33,222,44);
// console.log(result)


// const numbers = [23, 43, 54, 13, 53, 13, 55, 86, 82];

function getMaxOfArrayNumber(numbers) {
   let max = numbers[0]
   for (const num of numbers) {
      if (num > max) {
         max = num
      }
   }
   return max
}
// const result = getMaxOfArrayNumber(numbers);
// console.log(result)

const numbers = [23, 43, 54, 13, 53, 13, 55, 1, 86, 82];

function getMaxOfArrayNumber(numbers) {
   let min = numbers[0]
   for (const num of numbers) {
      if (num < min) {
         min = num
      }
   }
   return min
}

// const result = getMaxOfArrayNumber(numbers);
// console.log(result)

function shopping(shirt, pant, shoe) {
   const shirtPrice = 500;
   const pantPrice = 300;
   const shoePrice = 900;

   const totalShirtPrice = shirtPrice * shirt;
   const totalPantPrice = pantPrice * pant;
   const totalShoePrice = shoePrice * shoe;

   const totalCostPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
   return totalCostPrice;
}

// const result =shopping(8,1,1);
// console.log(result)
const phones = [
   { name: 'Galaxy S24', brand: 'Samsung', price: 99999, color: 'Black', camera: '50MP', size: '6.2 inch' },
   { name: 'iPhone 16', brand: 'Apple', price: 149999, color: 'White', camera: '48MP', size: '6.1 inch' },
   { name: 'Pixel 9', brand: 'Google', price: 89999, color: 'Blue', camera: '50MP', size: '6.3 inch' },
   { name: 'Xiaomi 14', brand: 'Xiaomi', price: 74999, color: 'Green', camera: '50MP', size: '6.36 inch' },
   { name: 'OnePlus 13', brand: 'OnePlus', price: 84999, color: 'Gray', camera: '50MP', size: '6.82 inch' }
];


function getCheapestPhone(phones) {
   let min = phones[0];
   for (const phone of phones) {

      if (phone.price < min.price) {
         min = phone
      }
   }
   return min
}


// const result = getCheapestPhone(phones);
// console.log(result)

function add(num1, num2) {
   return num1 + num2;
}
function subtract(num1, num2) {
   return num1 - num2;
}
function multiply(num1, num2) {
   return num1 * num2;
}
function divide(num1, num2) {
   return num1 / num2;
}

function calculator(a, b, operation) {
   if (operation === 'add') {
      const result = add(a, b)
      return result
   }
   else if (operation === 'subtract') {
      const result = subtract(a, b);
      return result;
   }
   else if (operation === 'multiply') {
      return multiply(a, b);
   }
   else if (operation === 'divide') {
      return divide(a, b)
   }
   else {
      return "onle 'add', 'subtract', 'multiply', 'divide' operation is allowed"
   }
}
// const result = calculator(4, 9, 'subtract')
// console.log(result)


function one() {
   return 8;
}

function two() {
   return one() + 2;
}

function three() {
   return two() * 5;
}

// console.log(three());

function one() {
   return 5
}
// console.log(one())
function one() {
   return 8;
}
function two() {
   return one()
}
// console.log(two());

function add() {
   return 10;
}
function total() {
   return add() + 5;
}
// console.log(total())

function one() {
   return 7
}
function two() {
   const x = one();
   return x * 2
}
// console.log(two())

function one() {
   return 4;
}
function two() {
   return one() + 6
}
function three() {
   return two() * 2
}
// console.log(three())

function add(a, b) {
   return a + b;
}
function multiply(num) {
   return num * 2;

}
function result() {
   const sum = add(5, 7)
   return multiply(sum)
}
// console.log(result())

function one() {
   return 2;
}
function two(a) {
   return a + one();
}
function three() {
   const x = two(8);
   return x * 3
}
// console.log(three())

function getSum(numbers) {
   let sum = 0;
   for (const num of numbers) {
      sum = sum + num
   }
   return sum
}
// const result2 = getSum([12, 42, 53]);

// console.log(result2)

function evenSum(numbers) {
   let even = 0;
   for (const num of numbers) {
      if (num % 2 === 0) {
         even = even + num
      }
   }
   return even
}
// const result2 = evenSum([1, 4, 6, 3, 7, 9,22]);
// console.log(result2)

function getMax(numbers) {
   let max = numbers[0]
   for (const num of numbers) {
      if (num > max) {
         max = num
      }
   }
   return max;
}
// const result2 = getMax([1, 4, 6, 3, 7, 9,22]);
// console.log(result2)

function countArray(numbers) {
   let countONe = 0
   for (const num of numbers) {
      if (num ===1) {
         countONe++;
      }
   }
   return countONe
}

// const result2 = countArray([1, 4, 6, 1, 3, 1, 1, 5, 8, 11,1,]);
// console.log(result2)

function doubleNUmbers(numbers) {
   let double=[]
   for (const num of numbers) {
     double.push(num *2)
   }
   return double

}

// const result2 = doubleNUmbers([1, 4,4,223,43,1]);
// console.log(result2)