 

// const student={
//     name:'Ajim Sorkar',
//     age:24,
//     isDeveloper:true,


// }
// console.log(student)


// const subjects = {
//   name: 'Mathe',
//   teacher: 'Robi',
//   exem: '30 Dec',
//   chapter: [
//     'first',
//     'second',
//     'therd'
//   ]
// };

// // console.log(subjects.exem);
// const examDate=subjects.exem;

// console.log(examDate)

// const persone={
//     name:'Ajim',
//     age:24,
//     merrid:true,
//     isDeveloper:true,
//     salary:30000,  
//     'fav places' :['CoxBazar', 'bandorBan', 'kuyacata']
// }

// console.log(persone['fav places']);

// const persone={
//     name:'Ajim',
//     age:24,
//     merrid:true,
//     isDeveloper:true,
//     salary:30000,  
//     'fav places' :['CoxBazar', 'bandorBan', 'kuyacata']
// }

// console.log(persone);


// const college={
//     name:'VNC',
//     class:['11', '12'],
//     events:['science fair', 'bijoy dibos', '21 Feb'],
//     unique:{
//         color:'blue',
//         result:{
//             gaap:5,

//         }

//     }
// }

// // console.log(college.unique.result.gaap)
// college.events[1] ='26 march'
// college.unique.result.gaap=4
// console.log(college.unique.result.gaap)
// console.log(college.events[1])
// delete college.class;
// console.log(college)

// const mobile={
//     brand:'One Plus',
//     price:25000,
//     color:'black',
//     camera:'50mp'
// } 
// for( const prop in mobile){
//     console.log(prop)
//     console.log(mobile[prop])
// }
 
// const keys =Object.keys(mobile);
// console.log(keys)

// for(const key of keys){
//     console.log(key,':', mobile[key])
// }

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod'])

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
 
// };
// car['passenger capacity']='5'
// console.log(car['passenger capacity'])

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks)


// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
//  const propt=Object.keys(student)
// console.log(propt.length)


// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// const keys =Object.keys(myObject)
// console.log(keys)
// for(key of keys){
    
//     console.log('key',(key), "|", ':',typeof myObject[key])
// }


// let sentence ='Count how many times a string has a Contary the letter a'
 
// let count=0;
// for(let text of sentence){
//     // console.log(text)
//     if(text === 'C'){
//         count++;
//     }
// }
// // console.log(count)
// let letter = 'bananaaa not ut u';
// let count =0;

// for(const text of letter){
//     if('aeiou'.includes(text)){
//         count++;
//     }
// }
// console.log(count)


// let str = "i am learning javascript";

// let words = str.split(" ");
// let result = [];
 
 

// for (const word of words) {
 
//     console.log(word);
//     let capitalWord =word[0].toUpperCase() + word.split(1);
//      result.push(capitalWord)
// }

// console.log(result.join(" "));


// let input='javaScript';
// let count=0;
// for(const letter of input){
    
//     if(letter ==='a'){
//         count++;
//      }
// }
// console.log(count)

// let propstion='developar';

// let kaj =propstion.includes('a');
// console.log(kaj)


const student=[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
console.log(student)
 
 