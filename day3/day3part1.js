let data;
fs = require('fs')
fs.readFile('data.txt', 'utf8', function (err,rawData) {
    data = rawData.split('\n');
    for (d in data) {
        
    }
});