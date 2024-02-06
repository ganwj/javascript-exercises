const repeatString = function (str, num) {
    if (num < 0) return "ERROR";

    let rString = "";
    for (let i = 1; i <= num; i++) {
        rString += str;
    }

    return rString;
};

// Do not edit below this line
module.exports = repeatString;
