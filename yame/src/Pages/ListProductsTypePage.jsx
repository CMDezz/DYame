import React, { useEffect, useState } from 'react';
import ProductList from "./../Component/ProductList/ProductList"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "./../Redux/Shop/ShopAction"

const ListProductsTypePage = ({ fetchAllProducts }) => {
    let Type = useParams().type;

    const [type, setType] = useState([]);

    const fetchType = async () => {
        const data = await fetch(
            `https://yameapp.herokuapp.com/api/product/getProductsByType?Name=${Type}`
        )
        const type = await data.json();
        console.log(type)
        setType(type);
        fetchAllProducts(type);  // dispatch lên store => ok 
    }
    useEffect(() => {
        window.scrollTo({ top: 0 })
        fetchType();
        console.log('123')

    }, [Type]);
    return (
        <div className="ListProducts">
            <div className="ListProductsTitle">
                <h3 className="mt-3">Danh sách sản phẩm thể loại: {Type}</h3>
            </div>
            <ProductList page={true} data={type}></ProductList>
        </div >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (item) => dispatch(fetchAllProducts(item))
    }
}
export default connect(null, mapDispatchToProps)(ListProductsTypePage);
