fs = require('fs');
const rawData = fs.readFileSync('data.txt', 'utf8');
let data = rawData.split('\n');

const X = 0;
const Y = 1;
const ROW_LENGTH = data[0].length;
let pos = [0, 0];


function addSlope(pos, rise, run) {
    const newX = pos[X] + run;
    const newY = pos[Y] + rise;
    const newPos = [newX, newY];

    return newPos;
}

function getTreeCount(rise, run) {
    pos = [0, 0];
    let count = 0;
    while (pos[Y] < data.length) {
        pos = addSlope(pos, rise, run);
    
        const row = data[pos[Y]];
        if (row == null) {
            break;
        }
    
        const infiniteX = pos[X] % ROW_LENGTH;
        const square = row[infiniteX];
        if (square === '#') {
            count++;
        }
    }
    return count;
}



let product = getTreeCount(1,1);
product *= getTreeCount(1,3);
product *= getTreeCount(1,5);
product *= getTreeCount(1,7);
product *= getTreeCount(2,1);

console.log(product);