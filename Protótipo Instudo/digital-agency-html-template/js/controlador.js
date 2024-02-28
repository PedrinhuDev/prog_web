//LocalStorage

function setItemLocal(user){

    localStorage.clear();
    localStorage.setItem('nome', user.nome);
    localStorage.setItem('sobrenome', user.sobrenome);
    localStorage.setItem('email', user.email);
    localStorage.setItem('senha', user.senha);
    localStorage.setItem('userName', user.userName);
    localStorage.setItem('cidade', user.cidade);
    localStorage.setItem('foto', user.foto);
    localStorage.setItem('convenio', user.convenio);

    
}

function checarItem(emailInput, senhaInput){
    let userEmail = localStorage.getItem('email');
    let userSenha = localStorage.getItem('senha')
    console.log(userEmail)
    console.log(userSenha)
    console.log(emailInput)
    console.log(senhaInput)
    if(emailInput == userEmail && senhaInput == userSenha){
        alert('Bem vindo' + localStorage.getItem('nome'))
    }else{
        alert('Email ou Senha inválidos')
    }
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
