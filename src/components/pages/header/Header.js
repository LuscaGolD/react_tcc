import './Header.css'

import seta from './imghead/seta.png'
import logo from './imghead/logo.png'
import heart from './imghead/heart.png'
import lupa from './imghead/lupa.png'
import usu from './imghead/usuario.png'

function Header(){
return(
    <nav className='nav'>

      <div className="container-logo">
    
          <div  className='logo-imagem'> <img src={logo}/></div>
          <div className='logo-texto'> 
           Game Facts
          </div> 
    
      </div> 
    
      <div className='Busca'>
    
       
       <input type="text" id="txtBusca" placeholder="Buscar"/>
        
      </div>

      <div className='menu'>
    
                    
                      
        <ul>
          
          
          <li>Categoria
      
            <img src={seta} width="20px" height="20px" />
          
          <ul>
            <li>Ação</li>
            <li>Aventura</li>
            <li>Sci-fi</li>
          </ul>
      
        </li>
        <li>plataforma
      
            <img src={seta} width="20px" height="20px" />
          
          <ul>
            <li>PlayStation</li>
            <li>Xbosta</li>
            <li>Nintendo</li>
          </ul>
      
          </li>
      
          
          
        </ul>
      
      </div>
    
      <div className='favoritos'> 
        <img src={heart} width="30px" height="30px"/>
      </div>
    
      <div className='usuario'> 
        <img src={usu} width="30px" height="30px" />
      </div>
    
    
      <div className='iniciar'>
        <a >Iniciar sessão</a>
      </div>
    
      
              
     
    
    
    </nav>
);
}


export default Header