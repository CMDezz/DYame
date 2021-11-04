import React from 'react';
import ProductDetails from './../Component/ProductDetails/ProductDetail'
import Suggestion from "./../Component/Suggestion/Suggestion";
import { useSelector } from "react-redux";

const ProductDetailsPage = (match) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const currentItem = useSelector((state) => {
        console.log(state.shop.currentItem)
        return state.shop.currentItem;
    })

    return (
        <div className="ProductsDetails" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <ProductDetails></ProductDetails>
            <Suggestion item={currentItem} ></Suggestion>
        </div>
    );
}

export default ProductDetailsPage;
