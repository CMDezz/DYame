import React, { useEffect, useState } from 'react';
import ProductList from "./../Component/ProductList/ProductList"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "./../Redux/Shop/ShopAction"

const SearchPage = ({ fetchAllProducts }) => {
    let keyWord = useParams().keyWord;

    const [searchResult, setSearchResult] = useState([]);

    const fetchSearch = async () => {
        const data = await fetch(
            `https://yameapp.herokuapp.com/api/product/searchProduct?search=${keyWord}`
        )
        const result = await data.json();
        // console.log(album)
        setSearchResult(result);
        fetchAllProducts(result);  // dispatch lên store => ok 
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        fetchSearch();
        // console.log(album)

    }, [keyWord]);

    return (
        <div>
            <h3 className="mt-5"> Kết quả tìm kiếm từ khóa : {keyWord}</h3>
            <ProductList page={true} data={searchResult} Name=""></ProductList>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (item) => dispatch(fetchAllProducts(item))
    }
}
export default connect(null, mapDispatchToProps)(SearchPage);
