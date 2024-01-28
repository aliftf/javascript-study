// For..of

const names = ['Youtube', 'Facebook', 'Instagram', 'Netflix', 'Amazon'];

for (const n of names) {
    console.log(n);
}

// String
for (const n of 'Dylan') {
    console.log(n);
}

// Index Entries
for (const [i, n] of names.entries()) {
    console.log(`${n} has index ${i}`);
}

// NodeList
const liNames = document.querySelectorAll('.names');
for (const n of liNames) {
    console.log(n.textContent);
}

// Arguments Object
function addNumbers() {
    let total = 0;
    for (const n of arguments) {
        total += n;
    }
    return total;
}

addNumbers(5, 10, 15, 20);

// For..in

const user = {
    name: 'Dylan',
    age: 32,
    social: {
        twitter: '@dylan',
        facebook: 'dylan.developer'
    }
};

for (const property in user) {
    console.log(property);
}