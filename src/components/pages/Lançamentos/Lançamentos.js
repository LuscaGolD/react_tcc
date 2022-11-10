import Mine from '../Home/img/mine.png'
import Celeste from '../Home/img/celeste.png'
import Lol from '../Home/img/lol.png'
import balãozada from '../Home/img/bloons.png'

function Lançamentos(){
    return(
        <div class="novosjogos">
     
        <h2>Lançamentos</h2>
   
        <ul>
          <li class="gameRow--item img"><img src={Mine}/></li>
          <li class="gameRow--item img"><img src={Celeste}/></li>
          <li class="gameRow--item img"><img src={Lol}/></li>
          <li class="gameRow--item img"><img src={balãozada}/></li>
        </ul>
   
      </div>
    );
}

export default Lançamentos