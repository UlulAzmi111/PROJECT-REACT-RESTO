import React from "react";
import { Link, useMatch } from "react-router-dom";

const Side = () => {

    const {url, path} = useMatch();

    return (
        <div>
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">Menu Aplikasi</div>
            <ul className="list-group list-group-flush">
            <Link to={`${url}/kategori`}>
                <li className="list-group-item">Kategori</li>
            </Link>
            <Link to='/menu'>
                <li className="list-group-item">Menu</li>
            </Link>

            <Link to="/pelanggan">
                <li className="list-group-item">Pelanggan</li>
            </Link>
            <Link to='/order'>
                <li className="list-group-item">Order</li>
            </Link>

            <Link to="/detail">
                <li className="list-group-item">Order Detail</li>
            </Link>

            <Link to='/admin-page'>
                <li className="list-group-item">Admin</li>
            </Link>
            </ul>
        </div>
        </div>
    );
    };

export default Side;
