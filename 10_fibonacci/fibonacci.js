/* 
    SET current value to 1
    SET previous value to 0
    FOR each iteration from 1 up to target index (exclusive)
        SET temp to current value
        ADD previous value to current value
        SET previous value to temp
    RETURN current value
*/

const fibonacci = function (num) {
    let index = Number(num);
    if (index < 0) return "OOPS";
    if (index === 0) return 0;

    let prev = 0,
        curr = 1;

    for (let i = 1; i < index; i++) {
        let temp = curr;
        curr += prev;
        prev = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
