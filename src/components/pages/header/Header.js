import './Header.css'
import { Link, useNavigate  } from 'react-router-dom'
import seta from './imghead/seta.png'
import logo from './imghead/logo.png'
import heart from './imghead/heart.png'
import lupa from './imghead/lupa.png'
import usu from './imghead/usuario.png'

function Header(){
  let navigate = useNavigate();
return(
    <nav className='nav'>

      <div className="container-logo">
    
          <div  className='logo-imagem'> <Link to='/'> <img src={logo}/> </Link> </div>
          <div className='logo-texto'> 
           <Link to='/'> <h4>Game Facts</h4></Link>
          </div> 
    
      </div> 
    
      <div className='Busca'>
    
       
       <input type="text" id="txtBusca" placeholder="Buscar"/>
        
      </div>

      <div className='menu'>
    
                    
                      
        <ul>
          
        <li>Exclusivos
      
      <img src={seta} width="20px" height="20px" />
    
    <ul>
    <li> <Link to="/plataforma/playstation">Playstation</Link></li>
    <li> <Link to="/cadastro">XBox</Link></li>
    <li> <Link to="/cadastro">Nintendo</Link></li>
    <li> <Link to="/cadastro">PC</Link></li>
    </ul>

    </li>

          <li>jogos
      
            <img src={seta} width="20px" height="20px" />
          
          <ul>
            <li> <Link to="/jogos">Avaliados </Link></li>
            {/* <li> <Link to="/cadastro">Em Breve</Link></li> */}
            {/* <li> <Link to="/cadastro">Recentes</Link></li> */}
            <li> <Link to="Top">Top 100</Link></li>
          </ul>
      
        </li>
        
          
          
        </ul>
      
      </div>
    
      <div className='favoritos'> 
        <img src={heart} width="30px" height="30px" onClick={ ()=>navigate('/jogos')}/>
      </div>
    
      <div className='usuario'> 
        <img src={usu} width="30px" height="30px" onClick={ ()=>navigate('/jogos')} />
      </div>
    
    <div className='paulo'>
      <div className='iniciar'>
      <Link to="/jogos"><a >Cadastrar</a></Link> 
      </div>

      <div className='iniciar'>
       <Link to="/jogos"><a >Login</a></Link> 
      </div>
    </div>
      
              
     
    
    
    </nav>
);
}


export default Header