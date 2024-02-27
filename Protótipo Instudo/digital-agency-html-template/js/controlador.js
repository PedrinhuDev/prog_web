//LocalStorage

function setItemLocal(array){
    localStorage.clear();
    localStorage.setItem(`usuarios`, JSON.stringify(array));
    i++
}

function checarItem(){
    let user = localStorage.getItem('usuarios');
    window.location.href  = 'infoUser.html'
    console.log(user)
}


//URL

function setURL(objeto){
    const buscaParametros = new URLSearchParams(window.location.search);
    buscaParametros.set("nome", objeto.nome);
    buscaParametros.set("sobrenome", objeto.sobrenome);
    buscaParametros.set("username", objeto.userName);
    buscaParametros.set("cidade", objeto.cidade);
    buscaParametros.set("estado", objeto.estado);
    buscaParametros.set("foto", objeto.foto);
    buscaParametros.set("email", objeto.email);
    buscaParametros.set("senha", objeto.senha);
    buscaParametros.set("convenio", objeto.convenio);
   



    
}
function testeURL(){
    const buscaParametros = new URLSearchParams(window.location.search);
        
   
    console.log(buscaParametros.get("nome"))
}
