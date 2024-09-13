// Hi! I'm Victor and I'm from apizaco

const name = "Victor";
const city = 'Apizaco';

console.log("Hi! I'm " + name +  "\n and I'm from" + city);

console.log('Hi I\'m ' + name +   '\n and I\'m from'+ city);

// Template literals
console.log(`Hi! I'm ${ name }  
    I'm from ${ city }`);

const message = `Hi! I'm ${ name }  I'm from ${ city }`;

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf("Victor"));
console.log(message.split(' '));
console.log("❤️  ❤️  ❤️ ".repeat(5));

