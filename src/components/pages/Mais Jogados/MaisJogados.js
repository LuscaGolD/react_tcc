import Mine from '../Home/img/mine.png'
import Celeste from '../Home/img/celeste.png'
import Lol from '../Home/img/lol.png'
import balãozada from '../Home/img/bloons.png'


function MaisJogados(){
    return(
           <div>
 <div class="maisjogados">

<h1>Mais Jogados</h1>


<ul class="carrossel-slide">
<li class="gameRow--item img"><img src={Mine}/></li>
          <li class="gameRow--item img"><img src={Celeste}/></li>
          <li class="gameRow--item img"><img src={Lol}/></li>
          <li class="gameRow--item img"><img src={balãozada}/></li>
  <li class="gameRow--item img"><img src={Lol}/></li>
</ul>

</div>

           </div>
    );
}

export default MaisJogados