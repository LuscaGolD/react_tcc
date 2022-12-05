



function Perfil () {
    return(
            <div>
     
  <div className="bar"> 
      <button className="botao"> Segurança e Privacidade</button>
      <button className="botao"> Favoritos</button>
  </div>
  <div className="container"> 
    <div className="img">
      <img src="./img/banner.png" width="953px" height="210px" />
    </div>
    <div className="conteudo-principal">  
      <div className="editperfil">
          <button className="btn-editperfil" type="reset">Editar Perfil</button>
          <label className="lbl-group1" for="">Usuário</label>
          <label className="lbl-username" for="">@User#0001</label>
          <div className="foto-perfil">
            <img className="img-perfil" src="./img/fotperfil003.jpg" alt="foto perfil"/> 
          </div>
      <div className="bio-user">
        <div className="campo-email">
            <div className="edita-email">
                <button className="btn-edit" type="reset">Editar</button>
                <label className="lbl-group"for="">Email:</label>
                <input className="input-email" type="text" placeholder="Digite seu email..."/>
            </div>
            <div className="edita-bio"> 
              <button className="btn-edit_bio" type="reset">Editar</button>
              <label className="lbl-group_bio" for="">Biográfia:</label>
              <textarea style="resize: none" className="txt_bio" name="biografia" id="bio" cols="30" rows="10">Adicione uma biografia...</textarea>
            </div> 
        </div> 
       </div>  
     </div>
     <div className="btn-desativa">
        <button className="bt-group" type="reset">Desativar conta</button>
        <button className="bt-group" type="reset">Excluir conta</button>
     </div>
     <div className="btn-sair">
       <button className="bt-sair" type="submit">Sair</button>
     </div>
  </div>
</div>


            </div>
        
    ); 
}

export default Perfil;