
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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


function MaisJogados(){
    return(
           
 <div class="maisjogados">

<h1>Mais Jogados</h1>


<>
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Mine} alt="opa"/></SwiperSlide>
        <SwiperSlide><img src={Lol}/></SwiperSlide>
        <SwiperSlide><img src={Celeste}/></SwiperSlide>
        <SwiperSlide><img src={balãozada}/></SwiperSlide>
        <SwiperSlide><img src={Lol}/></SwiperSlide>
        <SwiperSlide><img src={Mine}/></SwiperSlide>
        <SwiperSlide><img src={Celeste}/></SwiperSlide>
        <SwiperSlide><img src={Mine}/></SwiperSlide>
        <SwiperSlide><img src={balãozada}/></SwiperSlide>
      </Swiper>
    </>
 
      </div>
   
    );
}

export default MaisJogados