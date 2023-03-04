import {link} from './link.js';

export function ubah() {
    let id = 3;
    let data = {
        pelanggan : 'Azmi Ulul',
        alamat : 'Porong',
        telp : '+62879453765'
    }

    link.put('/pelanggan/'+id, data).then(res=>{
        console.log(res);

        let tampill = `<h3 class="display-6">${res.data.pesan}</h3>`;

        document.querySelector('#out').innerHTML = tampill;
    })
}