const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
for(i=0; i<5; i++){
    fs.writeFileSync(`${dirPath}/Apple${i}.txt`, 'simple text file')
}