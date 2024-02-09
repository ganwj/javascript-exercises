const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((total, value) => total + value, 0);
};

const multiply = function (arr) {
    return arr.reduce((product, value) => product * value, 1);
};

const power = function (a, b) {
    return Math.pow(a, b);
};

const factorial = function (num) {
    let i = 1,
        factorial = 1;
    while (i <= num) {
        factorial *= i;
        i++;
    }

    return factorial;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
