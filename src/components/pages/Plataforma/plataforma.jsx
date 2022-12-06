import './plataforma.css'
import Header from '../header/Header'
import Table from 'react-bootstrap/Table';
import { Pagination, Navigation } from "swiper";

function Ps () {
    return(
            <div>
              <Header/>

              <div className='categoriaTop'>
            
            <h1>Exclusivos Playstation</h1>
             <Table striped bordered hover>
  <thead className='table'>
    <tr>
      <th>#</th>
      <th></th>
      <th>Nome</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co2dwe.png' className='imageem'/></td>
      <td>Homem-Aranha Miles Morales</td>

    </tr>

    <tr>
    <td>2</td>
      <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1r0o.png'  className='imageem'/></td>
      <td>THE LAST OF US PART 2</td>
    
    </tr>

    <tr>
    <td>3</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png'  className='imageem'/></td>
      <td>GOD OF WAR 2018</td>
     
    </tr>

    <tr>
    <td>4</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.png'  className='imageem' /></td>
      <td>UNCHARTED 4</td>
     
    </tr>

    <tr>
    <td>5</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co2crj.png'  className='imageem'/></td>
      <td>GHOST OF TSUSHIMA</td>

    </tr>

    <tr>
    <td>6</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.png'  className='imageem'/></td>
      <td>HORIZON FORBIDDEN WEST</td>

    </tr>

    <tr>
    <td>7</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1r77.png'  className='imageem'/></td>
      <td>HOMEM-ARANHA</td>
   
    </tr>

    <tr>
    <td>8</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co2g84.png'  className='imageem'/></td>
      <td>GRAN TURINSMO 7</td>
     
    </tr>

    <tr>
    <td>9</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co316v.png'  className='imageem'/></td>
      <td>DEATH STRADING</td>
    
    </tr>

    <tr>
    <td>10</td>
    <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co4ukb.png'  className='imageem'/></td>
      <td>THE LAST OF US</td>
      
    </tr>
  </tbody>
</Table>
    </div>
                
            </div>
        
    ); 
}
export default Ps;