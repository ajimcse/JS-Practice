const numbers =[12,43]
// console.log(numbers)
 const x= numbers[0]
 const  y= numbers[1]
//  console.log(x,y)

const user = {
  name: "Ajim",
  age: 25,
  city: "Dhaka"
};
// const name = user.name;
// const city =user.city;

// console.log(name,city)
const { name, age } = user;

// console.log(name);
// console.log(age);

const employee ={
  ide:'VS Code',
  designation:'developer',
  machine:'mac',
  lenguages:['html', 'css', 'js'],
  specifacation:{
    height:35,
    weight:43,
    address:'kumarkhali',
    drink:'water'
  }
} 
// console.log(employee)
const {machine, ide} = employee;
// console.log(machine, ide)
const {weight, address} =employee.specifacation;
// console.log(weight, address );

const numbers1 =[10, 20, 30,40];
// console.log(numbers1)
const [first, second, third, fourth] = numbers1;
console.log(first,second)
console.log(third, fourth)
