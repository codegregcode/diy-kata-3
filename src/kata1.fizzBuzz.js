const fizzBuzz = (number) => {
const divide3 = (number % 3) === 0;
const divide5 = (number % 5) === 0;
// return divide3 ? 'Fizz' : divide5 ? 'Buzz' ? divide3 && divide5 ? 'FizzBuzz' : number;
    // const divide3 = (number % 3) === 0;
// const divide5 = (number % 5) === 0;

if (divide3 && divide5) {
    return 'FizzBuzz'
}

if (divide3) {
    return 'Fizz'
}

if (divide5) {
    return 'Buzz'
}
return number
}

module.exports = fizzBuzz;
