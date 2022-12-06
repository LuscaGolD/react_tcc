import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './components/pages/Home/App';
import TLJogo from './components/pages/TelaJogo/TelaJogo'
import reportWebVitals from './reportWebVitals';
import Perfil from './components/pages/TelaPerfil/perfil';
import Favoritos from './components/pages/TelaFavoritos/Favoritos';
import Cadastro from './components/pages/TelaCadastro/Cadastro';
import Quiz from './components/pages/Quiz/Quiz';
import Login from './components/pages/Login/Login';
import Top from './components/pages/Top/Top'
import Cat from './components/pages/Cat/Cat'
import Rpg from './components/pages/Cat/rpg'
import Simu from './components/pages/Cat/simu';
import Ps from './components/pages/Plataforma/plataforma';
import TLol from './components/pages/TelaJogo/Lol';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <Router>
      <Routes>
      <Route path="/" element={<App/>} />
        <Route path="/Perfil" element={<Perfil/>} />
        <Route path='/Jogos' element={<TLJogo/>}/> 
        <Route path='/Favoritos' element={<Favoritos/>}/> 
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Top' element={<Top/>}/>
        <Route path='/Categoria/aventura' element={<Cat/>}/>
        <Route path='/categoria/Rpg' element={<Rpg/>}/>
        <Route path='/categoria/Simulacao' element={<Simu/>}/>
        <Route path='/plataforma/playstation' element={<Ps/>}/>
        <Route path='/jogos/league_of_legends' element={<TLol/>}/>

      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
