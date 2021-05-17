const fs = require('fs');

const name = 'Marcel Molina';

fs.writeFileSync('nombre.json', name);