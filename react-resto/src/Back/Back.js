import React from "react";
import Nav from './Nav';
import Side from "./Side";
import Main from "./Main";
import Footer from "./Footer";

const Back = () => {
    return (
        <>
            <div className="row">
                <div> <Nav /> </div>
            </div>
            <div className="row">
                <div className="col-6"> <Side /> </div>
                <div className="col-6"> <Main /> </div>
            </div>
            <div className="row">
                <div> <Footer /> </div>
            </div>
        </>
    );
}

export default Back;
