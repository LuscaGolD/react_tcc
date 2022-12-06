
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate  } from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MaisJogados.css";

// import required modules
import { Pagination, Navigation } from "swiper";


import Mine from '../img/mine.png'
import Celeste from '../img/celeste.png'
import Lol from '../img/lol.png'
import balãozada from '../img/bloons.png'
import thelast from '../img/the last of us.png'


function MaisJogados(){
  let navigate = useNavigate();
    return(
           
 <div class="maisjogados">

<h1>Mais Jogados</h1>


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
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5pwb.png" alt="Plague Inc"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.png" alt="lol"  onClick={ ()=>navigate('/jogos/league_of_legends')}/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1z4s.png" alt="fortinite"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4zw5.png" alt="fifa"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5tkm.png" alt="overwatch2"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png" alt="god of war" onClick={ ()=>navigate('/jogos')}/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.png" alt="eldenring"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4apq.png" alt="counter strike"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.png" alt="valorant"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4sbw.png" alt="Cod"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4v5c.png" alt="Scorn"/></SwiperSlide>
        <SwiperSlide><img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co3s9z.png" alt="Gothan"/></SwiperSlide>
      </Swiper>
    </>
 
      </div>
   
    );
}

export default MaisJogados