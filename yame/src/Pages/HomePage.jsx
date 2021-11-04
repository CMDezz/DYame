import React, { Component, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllProducts } from "./../Redux/Shop/ShopAction"
import Poster from "./../Component/Poster/Poster";
import Slider from "./../Component/Slider/Slider";
import ProductList from "./../Component/ProductList/ProductList";
import Discount from "./../Component/Discount/Discount";


const HomePage = ({ fetchAllProducts }) => {
    const [banChay, setBanChay] = useState([]);
    const [banChay2, setBanChay2] = useState([]);


    const fetchBanChay = async () => {
        const data = await fetch(
            `https://yameapp.herokuapp.com/api/product/getProductsByAlbum?Name=Bán chạy`
        )
        const banChay = await data.json();
        setBanChay(banChay);
        fetchAllProducts(banChay);  // dispatch lên store => ok 
    }
    const fetchBanChay2 = async () => {
        const data = await fetch(
            `https://yameapp.herokuapp.com/api/product/getProductsByAlbum?Name=Bán chạy 2`
        )
        const banChay2 = await data.json();

        setBanChay2(banChay2);
        fetchAllProducts(banChay2);  // dispatch lên store => ok 
    }

    useEffect(() => {

        fetchBanChay();
        fetchBanChay2();
        // console.log("123")
        // console.log(banChay);

    }, []);



    return (
        <div className="YameHomePage">
            <Poster img="/image/MainPoster.jpeg"></Poster>
            <Slider ></Slider>
            <div className="hotProduct">
                <div className="hotProductTitle">
                    <h3>Top sản phẩm HOT</h3>
                    <p>Những sản phẩm thời trang mới nhất/ Hot nhất</p>
                </div>
                <ProductList data={banChay}></ProductList>
            </div>
            <Poster img="/image/Poster2.jpeg"></Poster>
            <div className="hotProduct hotProduct2">
                <ProductList data={banChay2}></ProductList>
            </div>

            <Discount></Discount>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (item) => dispatch(fetchAllProducts(item))
    }
}


export default connect(null, mapDispatchToProps)(HomePage);


