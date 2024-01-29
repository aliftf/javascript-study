// Callback
// Syncronous Callback

function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback) {
    const nama = prompt('Masukkan Nama : ');
    callback(nama);
}

// tampilkanPesan(halo);

tampilkanPesan( nama => alert(`Halo, ${nama}`) );

const mhs = [
    {
        "nama": "Sandhika Galih",
        "nrp": "043040023",
        "email": "sandhikagalih@unpas.ac.id",
        "jurusan": "Teknik Informatika",
        "idDosenWali": 1
    },
    {
        "nama": "Doddy Ferdiansyah",
        "nrp": "033040001",
        "email": "doddy@gmail.com",
        "jurusan": "Teknik Informatika",
        "idDosenWali": 2
    },
    {
        "nama": "Erik",
        "nrp": "023040002",
        "email": "erik@gmail.com",
        "jurusan": "Teknik Informatika",
        "idDosenWali": 2
    }
];

mhs.forEach(m => console.log(m.nama));

// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) { // 4 = Done
            if(xhr.status === 200) { // 200 = OK
                success(xhr.response);
            } else if(xhr.status === 404) { // 404 = Not Found
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

getDataMahasiswa('mahasiswa.json', results => {
    const mhs = JSON.parse(results);
    mhs.forEach(m => console.log(m.nama));
}, () => {
    
    });

// JQuery
console.log('Mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('Selesai');