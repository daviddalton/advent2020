fs = require('fs');
const rawData = fs.readFileSync('data.txt', 'utf8');
let data = rawData.split('\n\n');

let count = 0;
let target = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']

const passports = data.map((line) => {
    const l = line.replace(/\n/g, ' ');
    const kvp = l.split(' ');
    let passport = {};
    kvp.forEach((pair) => {
        const [key, value] = pair.split(':');
        passport[key] = value;
    });
    
    return passport;
    });

const byrCheck = (val) => {
    let isValid = false;
    isValid = val.length === 4 && +val >= 1920 && +val <= 2002;
    return isValid;
}
    
const iyrCheck = (val) => {
    let isValid = false;
    isValid = val.length === 4 && +val >= 2010 && +val <= 2020;
    return isValid;
}
    
const eyrCheck = (val) => {
    let isValid = false;
    isValid = val.length === 4 && +val >= 2020 && +val <= 2030;
    return isValid;
}
    
const hgtCheck = (val) => {
    let isValid = false;
    if (val.includes('in')) {
        const num = val.replace(/\D/g, '');
        isValid = +num >= 59 && +num <= 76;
    }
    
    if (val.includes('cm')) {
        const num = val.replace(/\D/g, '');
        isValid = +num >= 150 && +num <= 193;
    }
    
    return isValid;
}
    
const hclCheck = (val) => {
    let isValid = false;
    const HEX_PATTERN = /^#([a-fA-F0-9]{6})$/;
    isValid = HEX_PATTERN.test(val);
    return isValid;
}
    
const VALID_ECL = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const eclSpec = (val) => {
    let isValid = false;
    isValid = VALID_ECL.includes(val);
    return isValid;
}

const pidCheck = (val) => {
    let isValid = false;
    isValid = val.length === 9 && !Number.isNaN(+val);
    return isValid;
}

passports.forEach((passport) => {
    const hasRequired = target.every((field) => !!passport[field]);
    if (hasRequired) {
        const valid = byrCheck(passport.byr) && iyrCheck(passport.iyr) && eyrCheck(passport.eyr) && hgtCheck(passport.hgt) && hclCheck(passport.hcl) && eclCheck(passport.ecl) && pidCheck(passport.pid);
        if (valid) {
            count++;
        }
    }
});

console.log(count);