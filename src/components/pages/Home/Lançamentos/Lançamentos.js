import Mine from '../img/mine.png'
import Celeste from '../img/celeste.png'
import Lol from '../img/lol.png'
import balãozada from '../img/bloons.png'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Lançamentos.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import './Lançamentos.css';


function Lançamentos(){
    return(
        <div class="novosjogos">
     
        <h2>Lançamentos</h2>
   
        <>
      <Swiper
        slidesPerView={6}
        spaceBetween={25}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5ufr.png" alt='valorant22'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5v1u.png" alt='le aventure'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5u05.png" alt='project playtime'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2e66.png" alt='hello2'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5tja.png" alt="five"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5uhe.png" alt='two point'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5v0j.png" alt='farm simulator'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5tfg.png" alt='falsepine'/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5u96.png" alt="tales"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4w51.png" alt="Yi XIng"/></SwiperSlide>
      </Swiper>
    </>
 
      </div>
   
    );
}

export default Lançamentos