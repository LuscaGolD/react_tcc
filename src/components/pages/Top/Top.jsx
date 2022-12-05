import './Top.css'
import Header from '../header/Header'
import React, { useState, useEffect } from 'react' 

// import apiigdb from '../../services/apiigdb';

function Top () {
  
//   const baseURL = "https://api.igdb.com/v4/games/";
//   const [jogos, setJogos] = useState([]); 

//   const Client_ID = '1blglpdcmg53tgv2egn4952dqkjhuz'; 
//   const Authorization = 'Bearer bhgx9itg33i2pqdq6op4r01gowjgip'; 
//   const parametros = 'fields name,rating; sort rating desc; where rating > 75; limit 100;';
  
  // async function listaTop() {
  //   try {
  //       const response = await apiigdb.post('v4/games', {
  //         headers: {
  //             Authorization, 
  //             "Client-ID" : Client_ID
  //           }
  //       }); 
  //       console.log('API');
  //       console.log(response.data);
  //       setJogos(response.data); 
  //   } catch (error) {
  //       alert(error);
  //   }                
  // }

  // useEffect(() => {        
  //     listaTop();        
  // }, []);
    

  return(
            
              <div className='categoriaTop'>
              <Header/>
                <h1>Top 10</h1>
                <div className='massefect'>
                  
                <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co4a7a.jpg"  alt="mass efect" />
            
                  

                 

               
                <td className='textoa'>Mass Effect Trilogy (2012)</td>
              
                <h1 className='paragrafo'>Score</h1>
                <p className='numero'>98/100</p>
              </div>
              <div className='persona'>
            <img src="//images.igdb.com/igdb/image/upload/t_cover_small/co1nic.jpg"/>
              <td className='textoas'>Persona 5 Royal</td>
              <p className='numeropersona'>98/100</p>
              </div>
              <div className='catlady'>
            <img src="//images.igdb.com/igdb/image/upload/t_cover_small/co1rfw.jpg"/>
              <td className='textocat'>The Cat Lady(2012)</td>
              <p className='numerocat'>97/100</p>
              </div>
              <div className='disco'>
            <img src="//images.igdb.com/igdb/image/upload/t_cover_small/co1sfj.jpg"/>
              <td className='textodisco'>Disco Elysium(2019)</td>
              <p className='numerodisco'>97/100</p>
              </div>
              <div className='steins'>
            <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co5ff7.jpg"/>
              <td className='textosteins'>Steins;Gate(2009)</td>
              <p className='numerosteins'>96/100</p>
              </div>
              <div className='eldenring'>
            <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co4jni.jpg"/>
              <td className='textoelden'>Elden Ring(2022)</td>
              <p className='numeroelden'>96/100</p>
              </div>
              <div className='golden'>
            <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1n1x.jpg"/>
              <td className='textopersona'>Persona 4 Golden(2012)</td>
              <p className='numerogolden'>96/100</p>
              </div>
              <div className='thewitcher'>
            <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1wyy.jpg"/>
            <p className='numerowitcher'>95/100</p>
              <td className='textothewitcher'>The Witcher 3: Wild Hunt(2015)</td>
              </div>
              <div className='godofwar'>
            <img src="	https://images.igdb.com/igdb/image/upload/t_cover_small/co5s5v.png
"/>
              <p className='numerogod'>94/100</p>
              <td className='textogod'>God of War Ragnarok (2022)</td>
              </div>
              <div className='tlouremaster'>
            <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/co4ok8.jpg"/>
              <td className='textotlou'>The Last of Us Remastered(2014)</td>
              <p className='numerotlou'>94/100</p>
              </div>
            </div>
        
    ); 
}

export default Top;