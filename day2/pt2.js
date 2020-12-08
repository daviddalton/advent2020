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

        minBool = (password[min-1] === letter) ? true : false;
        maxBool = (password[max-1] === letter) ? true : false;

        if ((minBool === true && maxBool === false) || (minBool === false && maxBool === true)) {
            count++
        }
    }
    console.log(count);
});