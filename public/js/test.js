// Code for email splitting 

const email=prompt("Enter a valid email");

// Split the email address based on the dot ('.') and '@' symbols
const parts = email.split(/\.|@/);

// Extract the username and roll number
const username = parts[0];
const rollNumber = parts[1];

// Display the results
console.log('Username:', username);
console.log('Roll Number:', rollNumber);
