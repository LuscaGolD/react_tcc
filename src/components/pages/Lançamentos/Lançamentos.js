import Mine from '../Home/img/mine.png'
import Celeste from '../Home/img/celeste.png'
import Lol from '../Home/img/lol.png'
import balãozada from '../Home/img/bloons.png'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function Lançamentos(){
    return(
        <div class="novosjogos">
     
        <h2>Lançamentos</h2>
   
        <Carousel className='Slider'>
                <div>
                    <img src={Mine} />
                    <p className="legend">Mine</p>
                
                </div>
                <div>
                    <img src={Lol} />
                    <p className="legend">Lol</p>
                </div>
                <div>
                    <img src={balãozada} />
                    <p className="legend">Bloons </p>
                </div>
            </Carousel>
   
      </div>
    );
}

export default Lançamentos