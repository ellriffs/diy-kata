const numberToReversedDigits = number => {
    let arr = number
    .toString()
    .split("")
    .reverse()
    return arr.map(str => +str) 
};

module.exports = numberToReversedDigits;
