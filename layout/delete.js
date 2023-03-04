import {link} from './link.js';

export function hapus() {
    let id = 13;

    link.delete('/pelanggan/'+id).then(res=>{
        console.log(res);

        let muncul = `<h1 class="display-6">${res.data.pesan}</h1>`;

        document.querySelector('#out').innerHTML = muncul;
    })
}