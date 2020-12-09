fs = require('fs');
const rawData = fs.readFileSync('data.txt', 'utf8');
let data = rawData.split('\n\n');

let count = 0;
let target = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']

for (d in data) {
    let passport = data[d];
    passport = passport.replace(/\n/g, ' ');
    let passportFields = passport.split(' ');
    
    const checker = (passport, target) => (
        target.every((el) => {
          return passport.match(new RegExp(el,"i"))
        })
    )
    if (checker(passport, target)) {
        count++
    }
}

console.log(count);


