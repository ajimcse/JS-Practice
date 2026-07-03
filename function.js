
function name() {
    // console.log('ajim')
}
name()

function square(number) {
    const borgo = number * number;
    //   console.log(borgo)
}
square(5);

function add(num1, num2) {
    const sum = num1 + num2;
    // console.log(sum)
}
add(11, 44);

function differnce(num1, num2) {
    const diff = num1 - num2;
    return diff

}
// const fatherAge = 40;
// const matherAge = 30;

// const result = differnce(fatherAge, matherAge);

// console.log(result)


function tenTimes(number) {
    const result = number * 10;
    return result;
}
// console.log(result)

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = num1 * num2;
    const result = multiply / 2;
    return result;
}
// const result = doMath(11, 2);
// console.log(result)

function isEven(number) {
    if (number % 2 == 0) {
        return true
    } else {
        return false;
    }
}
// const result =isEven(11);
// console.log(result)


function isEvenAndOddSize(str) {
    const size = str.length;
    console.log(size)
    if (size % 2 === 0) {
        console.log('even')

        return true;
    }
    else {
        console.log('odd')
        return false;

    }
}
// isEvenAndOddSize('Dhaka')
// isEvenAndOddSize('faka')


function double(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    } else {
        const result = number * 3
        return result;
    }
}
// console.log(double(5,true))
// console.log(double(5,false))

function numberOfElements(numbers) {
    const len = numbers.length;
    return len;

}
// const result =numberOfElements([12,32,43,656,767,343,323])
// console.log(result)

function getAge(person) {
    const age = person.age;
    return age;
}
// const result =getAge({
//     name:'ajim',
//     age:25
// })
// console.log(result)

function sumOfNumber(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num
    }
    return sum
}
// const result = sumOfNumber([12, 434, 535, 5656, 323, 1]);
// console.log(result)

function sumOfNumber(numbers) {
    let even = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            even.push(num)
        }
    }
    return even
}
// const result = sumOfNumber([12, 434, 535, 5656, 323, 1]);
// console.log(result)

function multiply(num1, num2, num3, num4) {
    const result = num1 * num2 * num3 * num4;
    return result;
}
// const result =multiply(12,34,54,43);
// console.log(result)

function isEvenAndOdd(number) {
    if (number % 2 == 0) {
        const result = number * 2;
        return result
    } else {
        return number / 2
    }
}
// const result =isEvenAndOdd(22);
// console.log(result)

function makrAvg(numbers) {
    let sum = 0
    for (const number of numbers) {
        sum += number;

    }
    return sum / numbers.length
}
// const result = makrAvg([11, 32, 43, 54, 64, 42, 22]);
// console.log(result.toFixed(2))

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(str) {
    let count = 0

    for (const num of str) {
        if (num == '0') {
            count++;
        }

    }
    return count;

}
// const result = countZero('10101010010101');
// console.log(result)


// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function oddEven(number) {
    if (number % 2 === 1) {
        return 'odd';
    }
    else {

        return 'Even'
    }
}
// const result = oddEven(41);
// console.log(result)


function inchToFeet(inch) {
    const feet = inch / 12;
    const feeNumber = parseInt(feet);
    // console.log(feeNumber)
    // const inchRemaining =inch % 12;
    // console.log(inchRemaining)
    const result = feeNumber + ' ft ' + feeNumber + ' inch';
    return result;
}

// const result = inchToFeet();
// console.log(result)


function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } 
    if(year % 100 ===0 && year % 400 ===0){
        return true;
    }
    else{
        return false
    }
}
// const result = isLeapYear(2034);
// const result = isLeapYear1(2035);
// const result = isLeapYear2(2036);
// const result = isLeapYear3(2037);
// const result = isLeapYear(2038);
// console.log(result)

function oddNumber(numbers){
    let odd =[]
    for(const number of numbers){
       if(number % 2===1){
          odd.push(number)
       }
         
    }
    let sum =0
    for(const number of odd){
        sum = sum + number;
    }
    const count =odd.length
   const result = sum / count;
   return result
 } 
const numbers=[21,54,43,54,56,344,71,43,75,88,91];
const avg =oddNumber(numbers);
console.log(avg.toFixed(2))


