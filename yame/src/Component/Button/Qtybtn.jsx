import React, { useEffect, useState } from 'react';
import { adjustQty } from "./../../Redux/Shop/ShopAction";
import { connect } from "react-redux";
import "./Qtybtn.css"

const Qtybtn = (props) => {
    const [input, setInput] = useState(props.value);

    const plusQty = (name) => {
        if (props.purchase) return;
        let _input = input;
        _input++;
        setInput(_input);
        if (props.isCart) {
            props.adjustQty(props.id, props.size, _input)
        }
    }

    function minusQty(name) {
        if (props.purchase) return;
        let _input = input;
        if (_input == 1) return;
        _input--;
        setInput(_input);
        if (props.isCart) {
            props.adjustQty(props.id, props.size, _input)
        }
    }

    useEffect(() => {

    }, [input])

    return (
        <div className="amount">
            <span type="button" className="edit-qty minus" onClick={() => minusQty('qty')}>-</span>
            <input disabled type="number" name="qty" id={`qty${props.kexy}`} maxlength="12" value={input} min="1" title=" Số lượng" className="input-text qty" ></input>
            <span className="edit-qty plus" onClick={() => plusQty(`qty+${props.kexy}`)}>+</span>
        </div >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (itemId, size, value) => dispatch(adjustQty(itemId, size, value))
    }
}



export default connect(null, mapDispatchToProps)(Qtybtn);
