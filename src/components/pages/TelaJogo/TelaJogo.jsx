
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



function TLJogo () {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  
  
  return(
              <div className='bode'>
  
     
  <Header/>
  <div class="imagemcapa">
  
    <img src = {Godback} id="capa"/>
  
  </div>
  
    <div class="jogo">
      
       <h1 className='h1s' id="gods">God Of War Ragnarok</h1>
  
       <h1 className='h1s' id="godss">Status:</h1>
       
       <select id="drop">
        <option>Jogando</option>
        <option>Dropei</option>
        <option>Zerei</option>
        <option>interessado</option>
        </select>
  
     
        
         <h3 className='h3s' id="rank"> Rank:1#</h3>
         
         
         
  
      <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png" id="imagemborda"/>
  
         <p className='sinopse' id="godof">Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros.</p>
    
         <div class="generos">
  
         <div class="genero1" href="#">Ação</div>
    
         <div class="genero2" href="#">Aventura</div>

         


        

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
  
  export default TLJogo;