import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="central">
     <head>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
     </head>

<body className='body'>
<header>
 <nav class="navbar navbar-expand-lg bg-light">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Navbar</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Link</a>
         </li>
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul class="dropdown-menu">
             <li><a class="dropdown-item" href="#">Action</a></li>
             <li><a class="dropdown-item" href="#">Another action</a></li>
             <li><a class="dropdown-divider"/></li>
             <li><a class="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
         <li class="nav-item">
           <a class="nav-link disabled">Disabled</a>
         </li>
       </ul>
       <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
 
 

</header>

 
      



<div class="central">
<div id="demo" class="carousel slide" data-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="../TelaInicial/carrossel/tlou2.jpg" alt="TLOU2"/>
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

<link rel="stylesheet" href="css//style.css"/>


 <div class="linha2">

   <div class="categoria">

     <h1> Categorias </h1>
     
     <ul>
     <li>Ação</li>
     <li>Aventura</li>
     <li>Simulação</li>
     <li>estrategia</li>
     <li>RPG</li>
     </ul>

   </div>


   <div class="maisjogados">

     <h1>Mais Jogados</h1>


     <ul class="carrossel-slide">
       <li class="gameRow--item img"><img src="./jogo/mine.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/mine.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/celeste.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/lol.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/balãozada.png"/></li>
     </ul>

   </div>

 
   <div class="novosjogos">
     
     <h2>Novos Jogos</h2>

     <ul>
       <li class="gameRow--item img"><img src="./jogo/mine.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/celeste.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/lol.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/balãozada.png"/></li>
     </ul>

   </div>



   <div class="embreve">

     <h3>Em Breve</h3>

     <ul>
       <li class="gameRow--item img"><img src="./jogo/mine.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/celeste.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/lol.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/balãozada.png"/></li>
     </ul>

   </div>

   
   <div class="plataforma">

     <h3>Plataformas</h3>

     <ul>
       <li class="gameRow--item img"><img src="./jogo/mine.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/celeste.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/lol.png"/></li>
       <li class="gameRow--item img"><img src="./jogo/balãozada.png"/></li>
     </ul>

   </div>




 </div>
 </body>
 </div>


    
  );
}

export default App;
