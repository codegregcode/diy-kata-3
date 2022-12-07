const numberToReversedDigits = (number) => {
    return number.toString().split('').reverse().map(digit => parseInt(digit));
};
// convert number to string number.toString().split('').reverse()
// convert strings to numbers
// add to array
// return array

module.exports = numberToReversedDigits;
