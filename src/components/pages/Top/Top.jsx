import './Top.css'
import Header from '../header/Header'
import React, { useState, useEffect } from 'react' 
import { Pagination, Navigation } from "swiper";

import Table from 'react-bootstrap/Table';

function Top () {
  

  

  return(
            <div>
                <Header/>
              <div className='categoriaTop'>
            
                <h1>Top 10</h1>
                 <Table striped bordered hover>
      <thead className='table'>
        <tr>
          <th>#</th>
          <th></th>
          <th>Nome</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png' className='imageem'/></td>
          <td>God of War Ragnarok</td>
          <td>98/100</td>
        </tr>

        <tr>
        <td>2</td>
          <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.png'  className='imageem'/></td>
          <td>Elden Ring</td>
          <td>96/100</td>
        </tr>

        <tr>
        <td>3</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.png'  className='imageem'/></td>
          <td>The Witcher 3: Wild Hunt</td>
          <td>95/100</td>
        </tr>

        <tr>
        <td>4</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png'  className='imageem' /></td>
          <td>God of War</td>
          <td>94/100</td>
        </tr>

        <tr>
        <td>5</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co4ok8.png'  className='imageem'/></td>
          <td>The Last of Us Remastered</td>
          <td>94/100</td>
        </tr>

        <tr>
        <td>6</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.png'  className='imageem'/></td>
          <td>The Last of Us</td>
          <td>93/100</td>
        </tr>

        <tr>
        <td>7</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co5osy.png'  className='imageem'/></td>
          <td>Super Metroid</td>
          <td>93/100</td>
        </tr>

        <tr>
        <td>8</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co2v5y.png'  className='imageem'/></td>
          <td>Super Mario World</td>
          <td>93/100</td>
        </tr>

        <tr>
        <td>9</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.png'  className='imageem'/></td>
          <td>Red Dead Redemption 2</td>
          <td>93/100</td>
        </tr>

        <tr>
        <td>10</td>
        <td><img src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.png'  className='imageem'/></td>
          <td>Hollow Knight</td>
          <td>93/100</td>
        </tr>
      </tbody>
    </Table>
        </div>
        </div>
    ); 
}

export default Top;
