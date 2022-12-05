
import './TelaJogo.css'
import Header from '../header/Header'
import GodCapa from './img/godofwarnovo.jpg'
import Godback from './img/imagemcapagod.jpg'


import React, { useState } from 'react'
// import { Rating } from 'react-simple-star-rating'

function TLJogo () {
//     const [rating, setRating] = useState(0)

//   // Catch Rating value
//   const handleRating = (rate: Number) => {
//     setRating(rate)

//     // other logic
//   }
//   // Optinal callback functions
//   const onPointerEnter = () => console.log('Enter')
//   const onPointerLeave = () => console.log('Leave')
//   const onPointerMove = (value: Number, index: Number) => console.log(value, index)
    



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
       

    <img src={GodCapa} id="imagemborda"/>

       <p className='sinopse' id="godof">Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros.</p>
  
       <div class="generos">

       <div class="genero1" href="#">Ação</div>
  
       <div class="genero2" href="#">Aventura</div>
      
      </div>
     <div class="divquiz">
     <button id = "botaoquiz">Quiz
      
     </button>
    </div>
      <div className="classificar">
{/* 
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /> */}

    </div>

     {/* <div className="swiffy-slider">
  <ul class="slider-container">
      <li><iframe width="100%" height="100%" src="https://www.youtube.com/embed/x6oF3Jxu7X0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
      <li><img src="./scd71y.jpg" style="max-width: 100%;height: auto;"/></li>
      <li><img src="./scd72x.jpg" style="max-width: 100%;height: auto;"/></li>
      <li><img src="./trailer.jpg" style="max-width: 100%;height: auto;"/></li>

  </ul>

  <button type="button" className="slider-nav"></button>
  <button type="button" className="slider-nav slider-nav-next"></button>

  <div className="slider-indicators">
      <button className="active"></button>
      <button></button>
      <button></button>
      <button></button>
  </div>
</div>   */}
  

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