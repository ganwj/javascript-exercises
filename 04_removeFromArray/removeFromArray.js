const removeFromArray = function (arr, ...toRemove) {
    const removed = [];
    for (const ele of arr) {
        if (toRemove.includes(ele)) continue;
        removed.push(ele);
    }

    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
