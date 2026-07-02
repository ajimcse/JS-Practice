
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
const result = sumOfNumber([12, 434, 535, 5656, 323, 1]);
console.log(result)