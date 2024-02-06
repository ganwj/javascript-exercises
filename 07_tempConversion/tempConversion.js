const convertToCelsius = function (fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
