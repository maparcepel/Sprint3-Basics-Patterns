const fs = require('fs');

const name = fs.readFileSync('nombre.json', { encoding: 'utf-8' });

console.log(name);