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

let treeCount = 0;
while (pos[Y] < data.length) {
    pos = addSlope(pos, 1, 3);

    const row = data[pos[Y]];
    if (row == null) {
        break;
    }

    const infiniteX = pos[X] % ROW_LENGTH;
    const square = row[infiniteX];
    if (square === '#') {
        treeCount++;
    }
}
console.log(treeCount);