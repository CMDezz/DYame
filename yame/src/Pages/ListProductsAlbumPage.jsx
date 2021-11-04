import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ProductList from "./../Component/ProductList/ProductList"
import { connect } from "react-redux";
import { fetchAllProducts } from "./../Redux/Shop/ShopAction"
const ListProductsAlbumPage = ({ fetchAllProducts }) => {

    let Album = useParams().album;

    const [album, setAlbum] = useState([]);

    const fetchAlbum = async () => {
        const data = await fetch(
            `https://yameapp.herokuapp.com/api/product/getProductsByAlbum?Name=${Album}`
        )
        const album = await data.json();
        // console.log(album)
        setAlbum(album);
        fetchAllProducts(album);  // dispatch lên store => ok 
    }
    useEffect(() => {
        window.scrollTo({ top: 0 })
        fetchAlbum();
        // console.log(album)

    }, [Album]);

    return (
        <div className="ListProducts">
            <div className="ListProductsTitle">
                <h3 className="mt-3">Danh sách sản phẩm album {Album}</h3>
            </div>
            <ProductList page={true} data={album}></ProductList>
        </div >
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (item) => dispatch(fetchAllProducts(item))
    }
}

export default connect(null, mapDispatchToProps)(ListProductsAlbumPage);
