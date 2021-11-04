import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";
import SubNavbar from "./SubNavbar";

import { Thietke } from "./Navbardata/Thietkedata";
import { Dongian } from './Navbardata/Dongiandata';
import { Aothun } from './Navbardata/Aothundata';
import { More } from './Navbardata/Moredata';
import { MoreSub2 } from './Navbardata/MoreSub2data';
import TextField from "@material-ui/core/TextField";

import { fetchAllProducts } from "./../../Redux/Shop/ShopAction"
import { connect } from "react-redux";
import { useSelector } from "react-redux";
const Navbar = (props) => {
    const cart = useSelector(state => {
        return state.shop.cart;
    })
    const [cartNum, setCartNum] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const onChangeSearch = (e) => {
        setSearchValue(e.target.value)
    }
    useEffect(() => {
        let _cartNum = 0;
        cart.map(item => _cartNum += item.qty);
        setCartNum(_cartNum);
    }, [cart])
    const [Items, setItems] = useState([]);
    const fetchItem = async () => {
        const data = await fetch(
            `https://yameapp.herokuapp.com/api/product/searchProduct?search=${searchValue}`  //gọi api => ok

        )
        const items = await data.json();
        setItems(items);
        fetchAllProducts(items);  // dispatch lên store => ok 

    }

    return (
        <div className="YameNavbar">
            <Link to='/' className="logo">
                <img src="/image/logo.png" alt="" />
            </Link>
            <div className="menu">
                <ul className="menuList">
                    <li className="menuListItem banChay">
                        <Link className="menuListItemLink" to='/products/album/Bán%20chạy'>BÁN CHẠY </Link>
                    </li>
                    <li className="menuListItem thietKe" >
                        <Link className="menuListItemLink" to='' >THIẾT KẾ <i className="fas fa-chevron-down"></i></Link>
                        <SubNavbar SubItems={Thietke} ></SubNavbar>
                    </li>
                    <li className="menuListItem donGian">
                        <Link className="menuListItemLink" to='/products/type/Đơn%20giản'>ĐƠN GIẢN <i className="fas fa-chevron-down"></i></Link>
                        <SubNavbar SubItems={Dongian} ></SubNavbar>
                    </li>
                    <li className="menuListItem theThao">
                        <Link className="menuListItemLink" to='/products/album/Thể%20thao'>THỂ THAO </Link>
                    </li>
                    <li className="menuListItem aoThun">
                        <Link className="menuListItemLink" to='/products/type/Áo%20thun'>ÁO THUN <i className="fas fa-chevron-down"></i></Link>
                        <SubNavbar SubItems={Aothun} ></SubNavbar>
                    </li>
                    <li className="menuListItem more">
                        <Link className="menuListItemLink" to='/'><i className="fas fa-bars"></i> <i className="fas fa-chevron-down"></i>
                        </Link>
                        <SubNavbar SubItems={More} Sub2data={MoreSub2} ></SubNavbar>
                    </li>

                </ul>
            </div>
            <div className="navigationIcon">
                <TextField className="searchField"
                    id="standard-basic"
                    value={searchValue}
                    onChange={(e) => onChangeSearch(e)}
                    placeholder="Tìm kiếm"
                    size="small"
                    color="secondary"
                    style={{
                        marginBottom: "-5px"
                    }}
                    InputLabelProps={{
                        style: {
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            width: '100%',
                            color: 'white'
                        }
                    }}

                />
                <Link to={`/search/` + searchValue} onClick={fetchItem} className="navigationIconItem search"><i className="fa-lg fas fa-search"></i></Link>
                <Link to='/log-in' className="navigationIconItem logIn"><i className="fa-lg far fa-user"></i></Link>
                <Link to='/cart' className="navigationIconItem cart"><i className="fa-lg fas fa-shopping-bag"><span className="numItems">{cartNum}</span>
                </i> </Link>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (products) => {
            dispatch(fetchAllProducts(products))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
