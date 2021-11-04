import React from 'react';
import { Link } from "react-router-dom";
import "./Discount.css";
const { DiscountData } = require("./DiscountData/DiscountData")


const Discount = (props) => {
    const handleDiscount = DiscountData.map((data, index) => {
        return (
            <div className="DiscountItem" key={index}>
                <Link to="#"><img src={data.img} alt="" /></Link>
                <p>{data.title}</p>
            </div>
        )
    })
    return (
        <div className="YameDiscount">
            <div className="title">
                <h3>Các chương trình Khuyến mãi</h3>
                <p>Đừng bỏ lỡ các chương trình khuyến mãi hot tại Yame.vn</p>
            </div>
            <div className="Discount">
                {handleDiscount}
            </div>
        </div>
    );
}

export default Discount;
