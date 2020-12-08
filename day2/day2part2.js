var data;
fs = require('fs')
fs.readFile('data.txt', 'utf8', function (err,rawData) {
    data = rawData.split('\n');
    var count = 0;
    for (d in data) {
        var minBool = false;
        var maxBool = false;
        const [policy, password] = data[d].split(': ');
        const [range, letter] = policy.split(' ');
        const [min, max] = range.split('-');

        if (password[min-1] === letter) {
            minBool = true;
        }
        if (password[max-1] === letter) {
            maxBool = true;
        }

        if (minBool === true && maxBool === false) {
            count++
        } else if (minBool === false && maxBool === true) {
            count++
        }
        
    }
    console.log(count);
});