import logo from './logo.svg';
import './App.css';
import Categoria from '../categoria/categoria';
import Header from '../header/Header';
import CarrouselCentral from '../CarrousselCentral/CarrousselCentral';
import MaisJogados from '../Mais Jogados/MaisJogados';
import Lançamentos from '../Lançamentos/Lançamentos';
import EmBreve from '../Em Breve/EmBreve';
import Plataforma from '../Plataforma/Plataforma';


function Home() {
  return (
    <div>


<head>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  
     </head>

<body className='body'>



<Header/>

<CarrouselCentral/>


 <div class="linha2">

<Categoria/>

  <MaisJogados/>
 
  <Lançamentos/>




   
   <Plataforma/>



 </div> 
 </body>
      
      </div>


    
      );
    }
    
    export default Home;