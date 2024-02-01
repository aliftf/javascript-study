// Asynchronous Function adalah sebuah function yang bekerja secara asynchronous melalui event loop, menggunakan callback atau promise, yang menghasilkan promise sebagai return value, tetapi cara penulisan kode menggunakan penulisan synchronous style.

// Asynchronous Function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya. Keyword await membuat JavaScript menunggu sampai promise selesai dan mengembalikan hasilnya.

//
/*
const coba = new Promise( resolve => {
    setTimeout(() => {
        resolve('Hello World');
    }, 2000);
    
});

console.log(coba);
coba.then( () => console.log(coba));
*/

function cobaPromise() {
    return new Promise( (resolve, reject) => {
        const waktu = 3000;
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai');
            }, waktu);
        } else {
            reject('Kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then( () => console.log(coba)) // Sama seperti diatas
//     .catch( () => console.log(coba) ); 

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}

cobaAsync();