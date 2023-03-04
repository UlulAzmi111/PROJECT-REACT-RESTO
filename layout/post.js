import {link} from './link.js';

export function post() {
    let tambah = {
        pelanggan : 'my name is Ulul',
        alamat : 'my address in Pagerwojo',
        telp : '082498124563'
    }

    link.post('/pelanggan',tambah).then(res=>{
        console.log(res);

        let tampil = `<h1 class="display-6 mb-3">${res.data.pesan}</h1>`;
        tampil +=   `<table class="table table-bordered"><tr>
                        <th>Pelanggan</th>
                        <th>Alamat</th>
                        <th>Telp</th>
                    </tr>

                    <tr>
                        <td>${res.data.data.pelanggan}</td>
                        <td>${res.data.data.alamat}</td>
                        <td>${res.data.data.telp}</td>
                    </tr>
                    </table>`;

        document.querySelector('#out').innerHTML = tampil;

    });
}