import {link} from './link.js';

export function show() {

    let id = 3;
    link.get('/pelanggan/'+id).then(res=>{

        console.log(res);

        let out =   `<table class="table table-bordered"><tr>
                    <th>ID</th>
                    <th>Pelanggan</th>
                    <th>Alamat</th>
                    <th>Telp</th>
                    </tr>`;

        res.data.forEach(value => {
            out +=  `<tr>
                    <td>${value.idpelanggan}</td>
                    <td>${value.pelanggan}</td>
                    <td>${value.alamat}</td>
                    <td>${value.telp}</td>
                    </tr>`;
        });

        out += '</table>';

        document.querySelector('#out').innerHTML = out;

    })
}