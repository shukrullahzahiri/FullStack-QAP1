// Import the 'moment' module to use its functionalities
const moment = require('moment'); 

// Use moment to get the current date and time in a specific format
const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss'); // Format date and time
console.log(`Current date and time: ${currentDateTime}`); // Log the formatted date and time
