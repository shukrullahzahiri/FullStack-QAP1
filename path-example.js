const path = require('path'); // Import the path module

// Join multiple segments of a path
const joinedPath = path.join('/users', 'john', 'docs');
console.log(`Joined path: ${joinedPath}`); // Output: /users/john/docs

// Resolve an absolute path from a relative path
const resolvedPath = path.resolve('example.txt');
console.log(`Resolved path: ${resolvedPath}`); // Output: Absolute path to example.txt

// Extract the directory name from a full file path
const dirName = path.dirname('/users/john/docs/example.txt');
console.log(`Directory name: ${dirName}`); // Output: /users/john/docs
