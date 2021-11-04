import React, { Component, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentItem } from "./../../Redux/Shop/ShopAction"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./Product.css"

import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';
SwiperCore.use([Autoplay, Pagination]);

const Product = (props) => {
    const [data, setData] = useState({ Image: [] })
    let albumId = [...props.data.AlbumId];
    useEffect(() => {
        setData(props.data)
    }, [props.data])

    const handleProduct = data.Image.map((data, index) => {
        return <SwiperSlide key={index} className="ProductItem"><img className="YMPI" src={data} /></SwiperSlide>
    })
    return (
        <div className="YameProduct">
            <Link to={`/products/detail/` + data._id} onClick={() => {
                let newdata = {
                    ...data,
                    AlbumId: [...albumId]
                }
                // console.log("new---")
                // console.log(newdata)
                // console.log("new---")

                props.loadCurrentItem(newdata, albumId);


            }} >
                <Swiper autoplay={{ delay: (Math.floor(Math.random() * 8000) + 3000) }
                } pagination={true} className="mySwiper">
                    {handleProduct}
                </Swiper>
            </Link>
            <div className="ProductInfor">
                <p>{data.Name}</p>
            </div>
        </div >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrentItem: (Item, Id) => dispatch(loadCurrentItem(Item, Id))
    }
}

export default connect(null, mapDispatchToProps)(Product);

