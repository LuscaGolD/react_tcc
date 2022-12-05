import './Top.css'
import Header from '../header/Header'
import React, { useState, useEffect } from 'react' 

import apiigdb from '../../services/apiigdb';

function Top () {
  
  const baseURL = "https://api.igdb.com/v4/games/";
  const [jogos, setJogos] = useState([]); 

  const Client_ID = '1blglpdcmg53tgv2egn4952dqkjhuz'; 
  const Authorization = 'Bearer bhgx9itg33i2pqdq6op4r01gowjgip'; 
  const parametros = 'fields name,rating; sort rating desc; where rating > 75; limit 100;';
  
  async function listaTop() {
    try {
        const response = await apiigdb.post('v4/games', {
          headers: {
              Authorization, 
              "Client-ID" : Client_ID
            }
        }); 
        console.log('API');
        console.log(response.data);
        setJogos(response.data); 
    } catch (error) {
        alert(error);
    }                
  }

  // useEffect(() => {        
  //     listaTop();        
  // }, []);
    

  return(
            <div>
              <Header/>
              <div className='categoriaTop'>
                <h1>Top 10</h1>
                <div className='massefect'>
                  <h1>Mass Effect Trilogy</h1>
                <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co4a7a.jpg"  alt="mass efect" />
                </div>
               
              
              </div>
            </div>
        
    ); 
}

export default Top;