const fs = require('fs');
const zlib = require('zlib');

const zip = zlib.createGzip();

const read = fs.createReadStream('nombre.json');
const write = fs.createWriteStream('nombre.json.gz');

read.pipe(zip).pipe(write);

console.log('Archivo comprimido correctamente');