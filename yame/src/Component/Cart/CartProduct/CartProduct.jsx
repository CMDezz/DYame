import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import "./CartProduct.css"
// import { adjustQty } from "./../../../Redxux/Shop/ShopAction";
import { connect } from "react-redux"
import Qtybtn from "./../../Button/Qtybtn"
import { removeFromCart } from "./../../../Redux/Shop/ShopAction";
const CartProduct = (props) => {
    const handlePrice = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const [ttPrice, setTTPrice] = useState(0);

    const cart = useSelector(state => {
        return state.shop.cart;
    })
    useEffect(() => {
        let price = 0;
        price = props.data.qty * props.data.Price
        setTTPrice(price)
    }, [cart, ttPrice])

    return (
        <div className="CartProduct">
            <div className="CartProductImage">
                <img src={props.data.Image[0]} alt="" />
            </div>
            <div className="CartProductInfo">
                <div>
                    <h5>{props.data.Name}</h5>
                    <p>Size : {props.data.sizePicked} </p>
                </div>
                <p>Giá : {handlePrice(props.data.Price)} đ * {props.data.qty} = {handlePrice(ttPrice)} đ</p>
                <Qtybtn purchase={props.purchase} isCart={true} size={props.data.sizePicked} kexy={props.kexy} id={props.data._id} value={props.data.qty}></Qtybtn>
            </div>
            {!props.purchase ? <div className="DeleteBtn">
                <button onClick={() => props.removeFromCart(props.data._id, props.data.sizePicked)} type="button" className="btn btn-light">X</button>
            </div> : ""}

        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (itemId, size) => dispatch(removeFromCart(itemId, size))
    }
}
export default connect(null, mapDispatchToProps)(CartProduct);
