import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SliderItem from "./SliderItem";


import './Slider.css';

const Slider = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchSlider();
    }, []);
    const fetchSlider = async () => {
        const data = await fetch(
            "https://yameapp.herokuapp.com/api/album"
        )
        const album = await data.json();
        const newalbum = album.filter(al => al.Image[0].length > 0)

        setAlbums(newalbum);

    }

    const handleSlider = albums.map((sliderData, index) => {
        return <SliderItem sliderData={sliderData} key={index}></SliderItem>

    })
    return (
        <div className="YameSlider">
            <div className="YSlider">
                {handleSlider}
            </div>
        </div>
    );
}

export default Slider;
