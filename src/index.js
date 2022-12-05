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


      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
