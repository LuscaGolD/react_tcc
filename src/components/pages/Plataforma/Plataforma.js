import Mine from '../Home/img/mine.png'
import Celeste from '../Home/img/celeste.png'
import Lol from '../Home/img/lol.png'
import balãozada from '../Home/img/bloons.png'


function Plataforma(){
    return(
        <div class="plataforma">

        <h3>Plataformas</h3>
   
        <ul>
          <li class="gameRow--item img"><img src={Mine}/></li>
          <li class="gameRow--item img"><img src={Celeste}/></li>
          <li class="gameRow--item img"><img src={Lol}/></li>
          <li class="gameRow--item img"><img src={balãozada}/></li>
        </ul>
   
      </div>
   
    );
}

export default Plataforma