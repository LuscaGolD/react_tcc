import './categoria.css'
import Header from '../header/Header'
import Table from 'react-bootstrap/Table';

function Cat() {
    return(
            <div>
              <Header/>
              <div className='categoriaCat'>

                <h1>Aventura</h1>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co5inf.jpg"  alt="mass efect" />
                  <a>Discover My Body </a>
                </div>
                <div className='discover'>
                <img className='imagem' src="	https://images.igdb.com/igdb/image/upload/t_cover_med/co52d7.jpg"  alt="defiland" />
                  <a>Defi Land</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co4ukb.jpg"  alt="tlou" />
                  <a>The last of us 1</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="//images.igdb.com/igdb/image/upload/t_cover_med/co45jf.jpg"  alt="metalgear" />
                  <a>Metal Gear Solid: The Legacy Collection</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co2nbc.jpg"  alt="gtav" />
                  <a>Grand Theft Auto V: Special Edition</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co1r5n.jpg"  alt="gwent" />
                  <a>Gwent: Iron Judgment</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co5s5v.jpg"  alt="godof" />
                  <a>God of War Ragnarök</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co1wz4.jpg"  alt="thewitcher" />
                  <a>The Witcher 3: Wild Hunt - Game of the Year Edition</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co2b2m.jpg"  alt="wetrix" />
                  <a>Wetrix</a>
                </div>
                <div className='discover'>
                <img className='imagem' src="https://images.igdb.com/igdb/image/upload/t_cover_med/co3lyu.jpg"  alt="skyrim" />
                  <a>The Elder Scrolls V: Skyrim - Anniversary Edition</a>
                </div>
                </div>
                

    
            </div>
        
    ); 
}

export default Cat;