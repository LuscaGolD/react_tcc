
import './TelaJogo.css'
import Header from '../header/Header'
import GodCapa from './img/godofwarnovo.jpg'
import Godback from './img/imagemcapagod.jpg'
import banner1 from './img/scd71y.jpg'
import banner2 from './img/scd72x.jpg'
import banner3 from './img/trailer.jpg'

import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";



function TFort() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  
  
  return(
              <div className='bode'>
  
     
  <Header/>
  <div class="imagemcapa">
  
    <img src = "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/f/fortnite-switch/hero" id="capa"/>
  
  </div>
  
    <div class="jogo">
      
       <h1 className='h1s' id="gods">Fortnite: Chapter 2</h1>
  
       <h1 className='h1s' id="godss">Status:</h1>
       
       <select id="drop">
        <option>Jogando</option>
        <option>Dropei</option>
        <option>Zerei</option>
        <option>interessado</option>
        </select>
  
     
        
         <h3 className='h3s' id="rank"> Rank:11#</h3>
         
         
         
  
      <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1z4s.png" id="imagemborda"/>
  
         <p className='sinopse' id="godof">Mergulhe em um novo mundo. Escolha seu local de pouso e explore uma ilha totalmente nova com 13 novos locais. Nadar, pescar e muito mais! Apoie seu esquadrão usando a bazuca de bandagem e confira os novos esconderijos e explosivos! O combate também é atualizado com menos grind e mais diversão.</p>
    
         <div class="generos">
  
         <div class="genero1" href="#">MOBA</div>
    
     

         


        

        </div>
       
        
      
     
  
    
    
   
  
    
  
      <div id="disqus_thread"></div>
  {
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://gamefacts-1.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })()
  }
  
  
     
  </div>
  </div>
       
      ); 
  }
  
  export default TFort;