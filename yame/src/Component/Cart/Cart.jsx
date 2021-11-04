import React, { useEffect, useState } from 'react';
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const Cart = (props) => {
    let [totalPrice, setTotalPrice] = useState(0);
    let [totalItems, setTotalItems] = useState(0);
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const cart = useSelector(state => {
        return state.shop.cart;
    })
    const handleCartProduct = cart.map((item, i) => {
        return <CartProduct data={item} kexy={i}></CartProduct>
    })
    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.map(i => {
            items += i.qty;
            price += i.Price * i.qty;
        })
        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalItems, totalPrice])

    return (
        <div className="YameCart">
            <div className="YMCart">

                {totalItems == 0 ? <p>Bạn chưa thêm sản phẩm nào vào giỏ hàng !</p> : <div>
                    <h2>GIỎ HÀNG</h2>
                    <p>{totalItems} sản phẩm</p>
                </div>}
                <div className="CartDetail">
                    <div className="CartProductDetail">
                        {handleCartProduct}
                    </div>
                    <div className="CartCalc">
                        <p className="tit">* Mọi thông tin của quý khách sẽ được bảo mật</p>
                        <p className="font-weight-bold">Tạm tính : <span>{numberWithCommas(totalPrice)}đ</span></p>
                        <p className="font-weight-bold">Phí vận chuyển : <span>35.000đ</span></p>
                        <p className="font-weight-bold sum">Tổng : <span>{numberWithCommas(totalPrice + 35000)}đ</span></p>
                        <div>

                            <Link to="/shipping" type="button" className="btn btn-dark">Thanh toán</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}
export default Cart;
