import {link} from './link.js';

export function get() {
    link.get('/pelanggan').then(res=>{

        console.log(res.data);

        let output =   `<table class='table table-bordered'><tr>
                        <th>ID</th>
                        <th>Pelanggan</th>
                        <th>Alamat</th>
                        <th>Telp</th>
                        </tr>`;

        res.data.forEach(val => {
            output +=   `<tr>
                        <td>${val.idpelanggan}</td>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                        </tr>`;
        });

        output += '</table>'

        document.querySelector('#out').innerHTML = output;

    });
}