const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('')
    //.map((el) => el.split(' ').map(Number));

const SOUND = ['q','u','a','c','k'];
let count = 0;
let ducks = [];

const result = () => {
    if(input.length % 5 !== 0) {
        console.log(-1);
        return;
    }

    for(let i = 0; i < input.length; i++) {
        if(input[i] === 'q') {
            let duckIndex = ducks.findIndex(duck => duck[duck.length - 1] === 'k');
            if(duckIndex === -1) {
                ducks.push('q');
            } else {
                ducks[duckIndex] += 'q';
            }
        } else {
            let duckIndex = ducks.findIndex(duck => SOUND[duck.length % 5] === input[i]);
            if(duckIndex === -1) {
                console.log(-1);
                return;
            }
            ducks[duckIndex] += input[i];
        }
    }

    if(ducks.some(duck => duck.length % 5 !== 0)) {
        console.log(-1);
        return;
    }

    console.log(ducks.length);
}

result();