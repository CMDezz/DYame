import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
const { FooterData } = require("./FooterData/FooterData");
const Footer = () => {
    const handleFooter = FooterData.map((data, index) => {
        return (
            <div key={index} className="Footer" >
                <h5>{data.title}</h5>
                {data.address.map((_data, index) => {
                    return <p key={index}  >{_data}</p>
                })}
            </div>
        )
    })
    return (
        <div className="YameFooter">
            <div className="logo">
                <img src="/image/logo.png" alt="" />
            </div>
            <div className="Address">
                {handleFooter}
            </div>
        </div>
    );
}

export default Footer;
