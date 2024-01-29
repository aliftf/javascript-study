// API
// 1
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=4e0b8b9a&s=avengers',
    success: (movies) => {
        console.log(movies);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

// 2
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
        } else if(xhr.status === 404) {
            console.log('Not Found');
        }
    }
}
xhr.open('get', 'http://www.omdbapi.com/?apikey=4e0b8b9a&s=avengers');
xhr.send();

// 3
fetch('http://www.omdbapi.com/?apikey=4e0b8b9a&s=avengers') // Fetch return promise
    .then(response => response.json())
    .then(response => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji telah ditepati!');
    } else {
        reject('Ingkar janji..');
    }
});

janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));

// contoh 2
let ditepati2 = false;
const janji2 = new Promise((resolve, reject) => {
    if(ditepati2) {
        setTimeout(() => { // Pending
            resolve('Ditepati setelah beberapa waktu!');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Tidak ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log('Mulai');
// console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(() => console.log('Selesai menunggu!'))
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));
console.log('Selesai');

// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Sandhika Galih',
            pemeran: 'Doddy, Erik'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});

film.then(response => console.log(response));
cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });
