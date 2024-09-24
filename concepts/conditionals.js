// if else if else

let age = 18;
if (age >= 18) {
    console.log("Es mayor de Edad");
} else if (age > 15) {
    console.log("Es niño");
} else {
    console.log("TAS VERDEEE");
}

// Truthy and Falsy
// myNum = 0 --> false
// myNum > 0 --> true
// myStr = '' --> false
// myStr ='Hi' --> true

// Asignar Usuario por defecto
let username = '';
let defaultName;

if(username !== ''){
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

if(username){
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

defaultName = username || 'Invitado';

(age >= 18)
    ? console.log("Es mayor de Edad")
    : console.log("TAS VERDEEE");

/**
 * expr ? true: false;
 */
defaultName = username ? username : 'Invitado';
console.log(defaultName);

// switch case
const day = Math.floor(Math.random() * 7);
switch (day) {
    case 0:
        console.log("Es Domingo");
        break;
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Miercolitros");
        break;
    case 4:
        console.log("Juebebes");
        break;
    case 5:
        console.log("Beviernes");
        break;
    case 6:
        console.log("Sabadrink");
        break;
    default:
        console.log("Día no valido");
        break;
}