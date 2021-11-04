import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import "./ProductDetail.css";
import { addToCart } from "./../../Redux/Shop/ShopAction";
import Swal from 'sweetalert2';
import Qtybtn from '../Button/Qtybtn';
const ProductDetail = (props) => {

    const currentItem = useSelector((state) => {
        return state.shop.currentItem;
    })

    const handleProductImage = currentItem.SubImage.map((data, key) => {
        return (
            <img src={data} alt="" />
        )
    })
    const handleSize = Object.keys(currentItem.Size).map((size, index) => {
        return <option className="size" key={index} value={size}>{size} </option>
    })


    return (
        <div className="YameProductDetails  ">
            <div className="ProductDetails">
                <div className="ProductImage">
                    {handleProductImage}
                </div>
                <div className="ProductInformations">
                    <h5 className="ProductName font-weight-bold">{currentItem.Name}</h5>
                    <p className="ProductPrice "><span className="font-weight-bold">Giá : </span>{currentItem.Price}</p>
                    <p className="ProductId "><span className="font-weight-bold">Mã sản phẩm  : </span> {currentItem.id}</p>
                    <p className="ProductSize" ><span className="font-weight-bold">Kích cỡ: : </span> </p>
                    <div className="input-group mb-3 ProductSize">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Chọn Size</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            {handleSize}
                        </select>
                    </div>
                    <p className="ProductPrice font-weight-bold">Số lượng: </p>
                    <div className="ym d-flex">
                        <Qtybtn key="" value="1"></Qtybtn>
                        <div className="ml-2 ButtonAddToCart">
                            <button onClick={() => {
                                props.addToCart(currentItem)
                                Swal.fire({
                                    title: "Thêm thành công!",
                                    text: "Sản phẩm đã được thêm vào giỏ hàng",
                                    icon: "success",
                                    timer: 1300
                                })
                            }} type="button" className="AddToCard btn btn-light">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                    <p className="ProductInf mt-3 font-weight-bold">Thông tin sản phẩm</p>
                    <p className="ProductInfItems KieuDang" ><span className="font-weight-bold">Kiểu dáng : </span>{currentItem.Detail.kieuDang} </p>
                    <p className="ProductInfItems ChatLieu" ><span className="font-weight-bold">Chất liệu : </span>{currentItem.Detail.chatLieu} </p>
                    <p className="ProductInfItems DacDiem" ><span className="font-weight-bold">Đặc điểm : </span>{currentItem.Detail.dacDiem} </p>
                </div>
            </div>
        </div >
    );
}
const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            const qty = document.getElementsByClassName("qty")[0].value * 1
            const sizePicked = document.getElementsByClassName("custom-select")[0].value
            return dispatch(addToCart({ ...product, sizePicked: sizePicked, qty: qty }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
