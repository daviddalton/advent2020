var data;
fs = require('fs')
fs.readFile('data.txt', 'utf8', function (err,rawData) {
    data = rawData.split('\n');
    var count = 0;
    for (d in data) {
        const [policy, password] = data[d].split(': ');
        const [range, letter] = policy.split(' ');
        const [min, max] = range.split('-');

        const occurance = (password.match(new RegExp(letter, 'g')) || []).length;
        
        if (occurance >= min  && occurance <= max) {
            count++;
        }
    }
    console.log(count);
    
});