import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Poster.css';

const Poster = (props) => {
    const handlePosterEffect = () => {
        let divPoster = document.getElementsByClassName("YamePoster");
        for (let pos of divPoster) {
            pos.style.transform = "scale(1.0)"
        }

    }

    useEffect(() => { //thay the componentdidmount
        handlePosterEffect();
    }, []);

    return (
        <div className="YamePoster">
            <Link to='/main-poster'><img src={props.img}></img></Link>
        </div>
    );
}

export default Poster;
