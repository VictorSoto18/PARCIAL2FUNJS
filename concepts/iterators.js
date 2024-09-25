// High Order Functions
// Funciones de orden superior
// Funciones que reciben como parámetros otras funcionesones

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
}

calculator(10, 20, suma);
calculator(10, 20, resta);
calculator(10, 20, (a, b) => a * b);
calculator(10, 20, (a, b) => a / b);

const foods = ['tamales', 'pizza', 'chilaquiles',
                'Pozole', 'Tacos','maruchan'];
foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis =foods.map(food => food + '🍕🍕');
console.log(foodsEmojis);

const sdoof = foods.map(food => {
    const separated = food.split('');
    const reverse = separated.reverse();
    const joined = reverse.join('');
    return joined;
    // food => food.split('').reverse().join('')
} );
console.log(sdoof);


const nums = [1,2,3,4,5,6,7,8,9,10];
const squares = nums.map(num => num * num);
const cubes = nums.map(num => Math.pow(num, 3));
const halfs = nums.map(num => num / 2);
console.log(squares);
console.log(cubes);
console.log(halfs);

const nums = [1,2,3,4,5,6,7,8,9,10];
const mayor5 = nums.filter(num => num > 5);
const menor5 = nums.filter(num => num < 5);
const impares = nums.filter(num => num % 2 !== 0);
console.log(mayor5);
console.log(menor5);
console.log(impares);


function  wrappedGifts(gifts){
    return gifts.map(gift => {
        const tapa = '*'.repeat(gift.length + 2);
        return `${tapa}\n*${gift}*\n${tapa}`;
    });
}
const foods = ['tamales', 'pizza', 'chilaquiles',
    'Pozole', 'Tacos','maruchan'];
const wrappeds = wrappedGifts(foods);
wrappeds.forEach(item => console.log(item));

// filter
const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

//forEach, map, filter

const nums = [1,2,3,4,5,6,7,8,9,10];

// reduce
const sumatoria = nums.reduce((a, b) => a + b);
const factorial = nums.reduce((a, b) => a * b);
console.log(nums);
console.log(sumatoria);
console.log(factorial);

// some(or) every(and)
const positivos = nums.every(n => n > 0);
console.log(positivos);
const negativos = nums.every(n => n < 0);
console.log(negativos);

const ages = [20, 21, 25, 17, 18];
const algunos_mayores = ages.some(n => n > 18);
console.log(algunos_mayores);
const algunos_menores = ages.some(n => n < 18);
console.log(algunos_menores);

const fruits = ['🍎','🍐','🥭','🍑','🍒'];

const index_durazno = fruits.findIndex(f => f === '🍑');
console.log(fruits[index_durazno]);
