import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import tlfu2 from './Carrousselimg/tlou2.jpg'
import valorant from './Carrousselimg/valoros.jpg'
import irelia from './Carrousselimg/ireliaa.webp'

 function Carrcentral() {
  return (
    <Carousel width={1200} dynamicHeight={false} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} verticalSwipe={'natural'} autoFocus={true} showThumbs={false}>
    <div>
        <img src={tlfu2} />
        <p className="legend">The last Of Us 2</p>
    </div>
    <div>
        <img src={valorant} />
        <p className="legend">valorant</p>
    </div>
    <div>
        <img src={irelia} />
        <p className="legend">League Of Legends</p>
    </div>
</Carousel>
);
}


export default Carrcentral