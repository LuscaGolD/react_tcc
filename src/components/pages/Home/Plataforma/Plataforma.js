import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useNavigate  } from 'react-router-dom'
import "./Plataforma.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import Mine from '../img/mine.png'
import Celeste from '../img/celeste.png'
import Lol from '../img/lol.png'
import balãozada from '../img/bloons.png'


function Plataforma(){
  let navigate = useNavigate();
    return(
        <div class="plataforma">

        <h3>Plataformas</h3>
   
        <>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_logo_med/pl6a.png" alt="xbox"  /></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_logo_med/plim.png" alt="pc"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_logo_med/pl6e.png" alt="ps4" onClick={ ()=>navigate('/plataforma/playstation')}/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_logo_med/pl6b.png" alt="nintendo"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_logo_med/plcv.png" alt="ps5" onClick={ ()=>navigate('/plataforma/playstation')}/></SwiperSlide>
       
      </Swiper>
    </>
 
      </div>
   
    );
}

export default Plataforma