import React, { Component, useState, useEffect } from 'react';
import Product from "./Product";
import { connect, useSelector } from 'react-redux';
import "./ProductList.css";
import { fetchAllProducts } from '../../Redux/Shop/ShopAction';
import store from './../../Redux/store';
import Pagination from './../Pagination/Pagination';

const ProductList = ({ data, Search, page, fetchAllProducts }) => {
    if (data.length <= 12) page = false;
    // console.log(data)
    const products = useSelector((state) => state.shop.products);
    const [flag, setFlag] = useState(true);
    const [items, setItems] = useState([])
    const [pros, setPros] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const prosPerPage = 12;

    const pageVisited = (pageNumber - 1) * prosPerPage;

    const paginate = (number) => {
        setPageNumber(number);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const nextPage = () => {
        if (pageNumber == Math.ceil(data.length / prosPerPage)) return;
        paginate(pageNumber + 1)
    }
    const previousPage = () => {
        if (pageNumber == 1) return;
        paginate(pageNumber - 1)
    }


    const displayPros = pros.slice(pageVisited, pageVisited + prosPerPage)
        .map((pro, index) => {
            return <Product data={pro} key={index}></Product>
        })

    useEffect(() => {
        setPros(data)
    }, [data])

    const handleProductListData = items.map((data, index) => { // err=> products rỗng

        return <Product data={data} key={index}></Product>
    })

    return (

        < div className="YameProductList" >
            <div className="YMProductList">
                <div className="ProductList">
                    {flag == false ? <h3 className="mt-5">Rất tiếc, không tìm thấy kết quả!</h3> : ""}
                    {displayPros}
                </div>
            </div>
            {
                page == true ? <Pagination currentPage={pageNumber} nextPage={nextPage} previousPage={previousPage} pageNumber={pageNumber} prosPerPage={prosPerPage} totalPros={data.length} paginate={paginate}></Pagination> : ''
            }
        </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

