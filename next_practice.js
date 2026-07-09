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


// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 800 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Phone", price: 65000 }
// ];
// function productMinPrice(products) {
//      let pp=products[0]
//     for (const product of products) {

//         if ( product.price > pp.price) {
//            pp =product

//         }
//     }
//     return pp

// }
// const resul = productMinPrice(products);
// console.log(resul)

// function maxNumber(array) {

//     if (!Array.isArray(array)) {
//         return 'this is a not an array'
//     }
//     let max = array[0];
//     for (const arr of array) {
//         if (arr > max) {
//             max = arr
//         }
//     }
//     return max
// }
// const numbers = [12, 43, 53, 23, 8, 6, 199, 23, 54, 99, 121, 4, 2,]
// const resul = maxNumber(numbers);
// console.log(resul)


// function showInfo(info) {
//     if (typeof info !== 'string' || !info.includes("@")) {
//         return 'Invalid Email'
//     }
//     const parts = info.split("@");
//     const resul = parts[0] + " sent you an email from " + parts[1]
//     return resul
// }

// const person = 'ajimsorkar@gmail.com'
// const resul = showInfo(person);
// console.log(resul)


// function countBoolean(array){
//     if(!Array.isArray (array)){
//         return 'invalid Array'
//     }
//     let booleanCount=0
//    for(const arr of array){
//       if(typeof arr ==='boolean'){
//         booleanCount++
//       }
//    }
//    return booleanCount
// }
// const  array =[12,43,true,443,'ajim', false, 'Pabna',true,false];
// const resul =countBoolean(array)
// console.log(resul)


// testScore:  ৫০ পয়েন্ট সর্বোচ্চ
// schoolGrade : ৩০ পয়েন্ট সর্বোচ্চ
// Parent Profession: যদি "farmer" হয়, ২০ পয়েন্ট

// const jobInfo = {
//     name: 'ajim',
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true
// }

// function calculateFinalScore(obj) {
//     if (typeof obj !== 'object') {
//         return 'invalid obj'
//     }
//     let totalMarks = obj.testScore + obj.schoolGrade;
//     // console.log(totalMarks)
//     if (obj.isFFamily === true) {
//         totalMarks = totalMarks + 20

//     }
//     if (totalMarks >= 80) {
//         return true

//     }
//     return false

// }
// const resul = calculateFinalScore(jobInfo);
// console.log(resul)


function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }
    let sum = 0
    for (const time of waitingTimes) {
        sum = sum + time
    }
    const avg = sum / waitingTimes.length
    const israt = serialNumber - 1
    const isratTime = israt - waitingTimes.length
    const isratSerilTime = isratTime * avg
    return isratSerilTime
}
const resul = waitingTime([13, 2, 6, 7, 10], 6);
console.log(resul)