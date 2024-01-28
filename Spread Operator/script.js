// Spread Operator

const names = ['John', 'Peter', 'Bob'];
const cities = ['London', 'Paris', 'New York', 'Amsterdam'];

console.log(names); // ['John', 'Peter', 'Bob']
console.log(...names); // John Peter Bob
console.log(...names[0]); // J o h n

const nameLists = document.querySelector('.names');
const namesArray = [...nameLists.textContent]; // ['J', 'o', 'h', 'n', ' ', 'P', 'e', 't', 'e', 'r', ' ', 'B', 'o', 'b']

const combine = [...names, ...cities];
console.log(combine); // ['John', 'Peter', 'Bob', 'London', 'Paris', 'New York', 'Amsterdam']

// Copying Arrays
const namesCopy = [...names];


// Rest Parameters

function sum(...numbers) {
    // let total = 0;
    // for (const n of numbers) {
    //     total += n;
    // }
    // return total;

    return numbers.reduce((total, n) => total + n);
}

// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'John', false, 10, 'Michael', true, 'Steven', 11, 12, 13, 14, 15));
