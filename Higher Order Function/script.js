const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// find number >= 3

const numberFilter = number.filter(function(n) {
    return n >= 3;
});

// const numberFilter = number.filter(n => n >= 3);

console.log("Filter: ", numberFilter);

// map
// times all number by 2

const numberMap = number.map( n => n * 2);

console.log("Map: ", numberMap);

// reduce
// sum all number

const numberReduce = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Reduce: ", numberReduce);

// chaining
// find number > 5 and times by 3 and sum all number

const numberChaining = number.filter(n => n > 5)
    .map(n => n * 3)
    .reduce((acc, cur) => acc + cur);

console.log("Chaining: ", numberChaining);

// Practice
// Filter 'JAVASCRIPT LANJUTAN'

const videos = Array.from(document.querySelectorAll('[data-duration]'));

let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration)
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    .reduce((total, detik) => total + detik);

const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

const pDurasi = document.querySelector('.total-duration');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;  
const pJmlVideo = document.querySelector('.total-video');
pJmlVideo.textContent = `${jmlVideo} Video`;