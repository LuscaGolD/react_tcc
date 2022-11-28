import tlfu2 from './Carrousselimg/tlou2.jpg'
import valorant from './Carrousselimg/valoros.jpg'
import irelia from './Carrousselimg/ireliaa.webp'



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CarrousselCentral.css";

// import required modules
import { Navigation } from "swiper";

 function Carrcentral() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide><img src={irelia}/></SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>

);
}


export default Carrcentral
