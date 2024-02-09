function isAlphanumeric(char) {
    return (
        ("a".charCodeAt() <= char.charCodeAt() &&
            char.charCodeAt() <= "z".charCodeAt()) ||
        ("A".charCodeAt() <= char.charCodeAt() &&
            char.charCodeAt() <= "Z".charCodeAt()) ||
        ("0".charCodeAt() <= char.charCodeAt() &&
            char.charCodeAt() <= "9".charCodeAt())
    );
}

const palindromes = function (str) {
    let i = 0,
        j = str.length - 1;

    while (i < j) {
        if (isAlphanumeric(str[i])) {
            if (isAlphanumeric(str[j])) {
                if (str[i].toLowerCase() !== str[j].toLowerCase()) {
                    return false;
                }
                i++;
                j--;
            } else {
                j--;
            }
        } else {
            i++;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
