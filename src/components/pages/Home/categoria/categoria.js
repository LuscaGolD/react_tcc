import { Link, useNavigate  } from 'react-router-dom'


function Categoria (){
        let navigate = useNavigate();
return(
        <div>
<div className="topcat">
<h1> Categorias </h1>
              <div class="categoria">



<button className='cat' onClick={ ()=>navigate('/categoria/aventura')} >Aventura</button>
<button className='cat' onClick={ ()=>navigate('/categoria/simulacao')}>Simulação</button>
<button className='cat' onClick={ ()=>navigate('/categoria/Rpg')}>RPG</button>
<button className='cat'>Outros...</button>


</div>
</div>
        </div>
);

}

export default Categoria