const fs = require('fs');
const pug = require('pug');
const path = require('path');

const pugFilePath = path.join(__dirname, 'src', 'views', 'index.pug');
const htmlFilePath = path.join(__dirname, 'src', 'views', 'index.html');

const pugCode = fs.readFileSync(pugFilePath, 'utf8');
const htmlCode = pug.render(pugCode, { filename: pugFilePath });

fs.writeFileSync(htmlFilePath, htmlCode, 'utf8');

console.log('Pug to HTML conversion completed!');
