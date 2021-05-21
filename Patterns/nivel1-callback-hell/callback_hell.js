const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

// Read and reverse contents of text files in a directory
const readDir = () => {
    return new Promise((resolve, reject) => {
        readdir(inbox, (error, files) => {
            (error) ?
            reject("Error: Folder inaccessible"): resolve(files);
        });
    });
}

const readfile = (file) => {
    return new Promise((resolve, reject) => {
        readFile(join(inbox, file), "utf8", (error, data) => {
            (error) ?
            reject("Error: File error"): resolve(data);
        });
    });
}

const writefile = (file, data) => {
    return new Promise((resolve, reject) => {
        writeFile(join(outbox, file), reverseText(data), error => {
            (error) ?
            reject("Error: File could not be saved!"): resolve(`${file} was successfully saved in the outbox!`);
        });
    });
}

readDir()
    .then(files => {
        files.forEach(file => {
            readfile(file)
                .then(data => writefile(file, data))
                .then(success => console.log(success))
                .catch(error => console.log(error));
        });
    })
    .catch(error => console.log(error));