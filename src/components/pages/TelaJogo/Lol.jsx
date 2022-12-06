
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



function TLol () {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  
  
  return(
              <div className='bode'>
  
     
  <Header/>
  <div class="imagemcapa">
  
    <img src = "https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2020/08/league-of-legends-como-o-jogo-surgiu-e-se-tornou-referencia-online-14.jpg" id="capa"/>
  
  </div>
  
    <div class="jogo">
      
       <h1 className='h1s' id="gods">League Of Legends</h1>
  
       <h1 className='h1s' id="godss">Status:</h1>
       
       <select id="drop">
        <option>Jogando</option>
        <option>Dropei</option>
        <option>Zerei</option>
        <option>interessado</option>
        </select>
  
     
        
         <h3 className='h3s' id="rank"> Rank:15#</h3>
         
         
         
  
      <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.png" id="imagemborda"/>
  
         <p className='sinopse' id="godof">League of Legends é um jogo online rápido e competitivo que combina a velocidade e a intensidade de um RTS com elementos de RPG. Duas equipes de campeões poderosos, cada um com um design e estilo de jogo únicos, lutam frente a frente em vários campos de batalha e modos de jogo. Com uma lista cada vez maior de campeões, atualizações frequentes e uma próspera cena de torneios, League of Legends oferece rejogabilidade infinita para jogadores de todos os níveis de habilidade.</p>
    
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
  
  export default TLol;