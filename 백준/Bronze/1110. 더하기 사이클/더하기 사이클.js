const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let n_10 = 0;
let n_1 = 0;
let count = 0;

function number_slice(number) {
    if (Math.floor(number / 10) == 0) {
        n_10 = 0;
        n_1 = number % 10;
    } else {
        n_10 = Math.floor(number / 10);
        n_1 = number % 10;
    }

    number = n_1 * 10 + ((n_10 + n_1) % 10);

    count++;
    if (number == input) {
        return count;
    } else {
        return number_slice(number);
    }
}

console.log(number_slice(input));
