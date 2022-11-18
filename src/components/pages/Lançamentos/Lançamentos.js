import Mine from '../Home/img/mine.png'
import Celeste from '../Home/img/celeste.png'
import Lol from '../Home/img/lol.png'
import balãozada from '../Home/img/bloons.png'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Lançamentos.css';


function Lançamentos(){
    return(
        <div class="novosjogos">
     
        <h2>Lançamentos</h2>
   
        <Carousel className='Slider' autoPlay={true} interval={2800} infiniteLoop={true} showArrows={true} centerMode={true}  showStatus={false} showThumbs={false} showIndicators={false} >
                <div className='Row'>
                    <img src={Mine} />
                    <p >Mine</p>
                   < img src={Celeste}/>
                
                </div>
                <div  className='Row'>
                    <img src={Lol} />
                    <p >Lol</p>
                </div>
                <div className='Row'>
                    <img src={balãozada} />
                    <p >Bloons </p>
                </div>


                <div  className='Row'>
                    <img src={Celeste} />
                    <p >Lol</p>
                </div>

                
            </Carousel>
   
      </div>
    );
}

export default Lançamentos