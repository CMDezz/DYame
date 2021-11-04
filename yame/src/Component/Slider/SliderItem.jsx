import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SliderItem.css';

class SliderItem extends Component {
    render() {
        return (
            <div className="SliderItem">
                <div className="Title">
                    <Link to="#">{this.props.sliderData.Name}</Link>
                </div>
                <div className="mainImg">
                    <Link to={`/products/album/` + this.props.sliderData.Name}><img src={this.props.sliderData.Image} alt="" /></Link>
                </div>
            </div>
        );
    }
}

export default SliderItem;
