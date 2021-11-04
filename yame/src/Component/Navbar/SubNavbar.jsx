import React from 'react';
import { Link } from 'react-router-dom';

import Sub2Navbar from './Sub2Navbar';

import "./SubNavbar.css";

const SubNavbar = (props) => {
    const handleSubNavbar = () => {
        return props.SubItems.map((item, index) => {
            return (
                <li className={item.cName} key={index} >
                    <Link to={item.path} >
                        {item.title}
                    </Link>
                    {props.Sub2data ? <Sub2Navbar index={index} Sub2data={props.Sub2data}> </Sub2Navbar> : ""}
                </li>
            );
        })
    }
    return (
        <div className="Submenu">
            <ul className="SubItemsList">
                {handleSubNavbar()}
            </ul>
        </div>
    );
}

export default SubNavbar;
