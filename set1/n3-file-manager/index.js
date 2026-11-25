// Henesty G. De Guzman
// IV BSIT - A
// N1: Project Setup and Package Management
// Date: November 20, 2026

const fs = require('fs');
const path = require('path');

// This part will allow us to use file system and path functions
const folder = path.join(__dirname, 'files');

// This part will create the files folder if it is not yet existing
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
}

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

// This will build the file path using the folder and file name
const filePath = fileName ? path.join(folder, fileName) : null;

// This part will create a file and put the given content inside
if (command === 'create') {
    if (!fileName || content === undefined) {
        console.log('Error: Please provide a file name and content.');
    } else {
        fs.writeFileSync(filePath, content);
        console.log(`File "${fileName}" created successfully!`);
    }
}

// In this part will read and display the contents of the file
else if (command === 'read') {
    if (!fileName) {
        console.log('Error: Please provide a file name.');
    } else if (!fs.existsSync(filePath)) {
        console.log(`Error: File "${fileName}" does not exist.`);
    } else {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(`Contents of ${fileName}:`);
        console.log(data);
    }
}

// This part will add new text to the existing file
else if (command === 'update') {
    if (!fileName || content === undefined) {
        console.log('Error: Please provide a file name and text to append.');
    } else if (!fs.existsSync(filePath)) {
        console.log(`Error: File "${fileName}" does not exist.`);
    } else {
        fs.appendFileSync(filePath, content);
        console.log(`File "${fileName}" updated successfully!`);
    }
}

// This part will delete the selected file
else if (command === 'delete') {
    if (!fileName) {
        console.log('Error: Please provide a file name.');
    } else if (!fs.existsSync(filePath)) {
        console.log(`Error: File "${fileName}" does not exist.`);
    } else {
        fs.unlinkSync(filePath);
        console.log(`File "${fileName}" Deleted Successfully!`);
    }
}

// This part will show all the files and their information inside the files folder
else if (command === 'list') {
    const files = fs.readdirSync(folder);

    // This will check if there are no files inside the folder
    if (files.length === 0) {
        console.log('The files folder is empty.');
    } else {
        console.log('Files in the folder:\n');

        // This will go through each file inside the folder
        files.forEach(file => {
            const fullPath = path.join(folder, file);
            const name = path.basename(fullPath);
            const extension = path.extname(fullPath);
            const data = fs.readFileSync(fullPath, 'utf8');

            // This will display the file information and its contents
            console.log(`Full Path: ${fullPath}`);
            console.log(`File Name: ${name}`);
            console.log(`Extension: ${extension}`);
            console.log(`Contents: ${data}`);
            console.log('--------------------------');
        });
    }
}

// This part will display a message if the command is not valid
else {
    console.log('Invalid command.');
    console.log('Available commands: create, read, update, delete, list');
}