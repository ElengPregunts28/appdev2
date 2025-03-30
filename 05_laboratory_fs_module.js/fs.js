const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Failed reading file', err);
    } else {
        console.log('Message:', data);
    }
});

fs.writeFile('newfile.txt', 'This is a new file created by Node.js!', (err) => {
    if (err) {
        console.error('Failed creating file:', err);
    } else {
        console.log('Successfully created a new file.');
    }
});

fs.appendFile('sample.txt', '\nAppended content', (err) => {
    if (err) {
        console.error('Failed appending file', err);
    } else {
        console.log('File appended succesfully.');
    }
});

fs.unlink('newfile.txt', (err) => {
    if (err) {
        console.error('Failed deleting file:', err);
    } else {
        console.log('File deleted.');
    }
});

