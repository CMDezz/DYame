import React from 'react';
import { Link } from 'react-router-dom';

import "./Sub2Navbar.css";

const Sub2Navbar = (props) => {
    const handleSub2Navbar = () => {
        let itemList = props.Sub2data[props.index];
        return (
            itemList.map((item, index) => {
                return (
                    <li className={item.cName} key={index}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                )
            })
        )
    }
    return (
        <div className="Sub2Navbar ">
            <ul className="Sub2NavbarList">
                {handleSub2Navbar()}
            </ul>
        </div>
    );
}

export default Sub2Navbar;
