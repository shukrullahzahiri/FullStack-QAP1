const fs = require('fs'); // Import the fs module

// Write content to a file named 'example.txt'
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) throw err; // Handle any errors during file write
    console.log('File written successfully'); // Log success message

    // Read the content of the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err; // Handle any errors during file read
        console.log(`File contents: ${data}`); // Log file contents

        // Delete the file
        fs.unlink('example.txt', (err) => {
            if (err) throw err; // Handle any errors during file delete
            console.log('File deleted successfully'); // Log success message
        });
    });
});
