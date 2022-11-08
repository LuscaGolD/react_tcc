import bloons from '../Home/img/bloons.png'

function CarrouselCentral(){
    return(
        <div>
<div class="central">
<div id="demo" class="carousel slide" data-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="" alt="TLOU2"/>
     <div class="carousel-caption">
       <h3 translate="no">The Last Of Us</h3>
       <p>The last of us 2 é sucesso de vendas</p>
       <a href="https://meups.com.br/noticias/the-last-of-us-part-ii-10-milhoes-de-copias/">Veja a notícia</a>
     </div>   
   </div>
   <div class="carousel-item">
     <img src="../TelaInicial/carrossel/valoros.jpg" alt="Valorant" />
     <div class="carousel-caption">
       <h3 translate="no">Valorant</h3>
       <p> VALORANT: Riot planeja audiência ao vivo nos playoffs do Champions, diz site
       </p>
       <a href="https://maisesports.com.br/valorant-riot-planeja-audiencia-ao-vivo-nos-playoffs-do-champions-diz-site/"> Veja Mais</a>
     </div>   
   </div>
   <div class="carousel-item">
     <img src="../TelaInicial/carrossel/ireliaa.webp" alt="lol"/>
     <div class="carousel-caption">
       <h3 translate="no">League Of Legends</h3>
       <p>Chega a atualização 12.15 do league of legends</p>
       <a href="https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-15-notes/">Veja as notas</a>
     </div>   
   </div>
 </div>
 <a class="carousel-control-prev" href="#demo" data-slide="prev">
   <span class="carousel-control-prev-icon"></span>
 </a>
 <a class="carousel-control-next" href="#demo" data-slide="next">
   <span class="carousel-control-next-icon"></span>
 </a>
</div>
</div>

        </div>
    );
}

export default CarrouselCentral