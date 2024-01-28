// Destructuring Assignments / Variables

// Desctructuring Array
const intro = ['Hello', 'I', 'am', 'Dylan'];
const [greeting, pronoun, verb, name] = intro;

// Skipping Items
const [greeting2, , , name2] = intro;

// Swapping Variables
let a = 1;
let b = 2;
[a, b] = [b, a];

// Functions Returning Multiple Values
function returnMultipleValues() {
    return [1, 2];
}

const [a2, b2] = returnMultipleValues();

// Rest Values
const [a3, b3, ...rest] = [1, 2, 3, 4, 5];

// Destructuring Objects
const person = {
    name: 'Dylan',
    age: 32,
    location: {
        city: 'Berlin',
        temp: 30
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

function getName ({ name }) {
    console.log(name);
}

getName(person);