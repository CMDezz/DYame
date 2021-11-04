import React, { useEffect, useState } from 'react';
import Product from "./../ProductList/Product";
import { connect, useSelector } from "react-redux";
import { fetchAllProducts } from '../../Redux/Shop/ShopAction';
import "./Suggestion.css"

const Suggestion = ({ item }) => {
    const products = useSelector((state) => state.shop.products);
    const [Items, setItems] = useState([]);
    let Type = (item.TypeId[0] !== undefined) ? item.TypeId[0]["Name"] : ""
    let Album = (item.AlbumId[0] !== undefined) ? item.AlbumId[0]["Name"] : ""
    // console.log(Album)

    useEffect(() => {
        fetchItem();
    }, [item]);
    const fetchItem = async () => {
        // console.log(Name)
        let url = "";
        if (Album.length > 0) url = `https://yameapp.herokuapp.com/api/product/getRandomProductInAlbum?Name=${Album}`  //gọi api => ok
        if (Album.length == 0) url = `https://yameapp.herokuapp.com/api/product/getRandomProductInType?Name=${Type}`  //gọi api => ok
        const data = await fetch(
            url
        )
        const items = await data.json();
        setItems(items);
        fetchAllProducts(items);  // dispatch lên store => ok 

    }
    // fetchItem();
    const handleProduct = Items.map((item, index) => {
        return <Product data={item} key={index}></Product>
    })

    return (
        <div className="YMSug">
            <h4 className="mt-5">Sản phẩm liên quan :</h4>
            <div className="YMSuggestion">
                <div className="SuggestionProductList">
                    {handleProduct}
                </div>
            </div>
        </div>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (products) => dispatch(fetchAllProducts(products))
    }
}

export default connect(null, mapDispatchToProps)(Suggestion);
