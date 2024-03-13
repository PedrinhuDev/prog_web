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

 function limparCampos(){

let nome = document.getElementById("inptNome");
let sobrenome = document.getElementById("inptSobrenome");
let userName = document.getElementById("inptUsername")
let cidade = document.getElementById("inptCidade")
let estado = document.getElementById("inptEstado")


let foto = document.getElementById("fotoFile")
let email = document.getElementById("inputEmail")
let senha = document.getElementById("inputPassword")

nome.value = ''
sobrenome.value = ''
userName.value = ''
cidade.value = ''
estado.value = ''
foto.value = ''
email.value = ''
senha.value = ''

}

function mostrarSenha() {
    var x = document.getElementById("inputSenha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function checarItem(emailInput, senhaInput){
    let userEmail = localStorage.getItem('email');
    let userSenha = localStorage.getItem('senha')
   
    if(emailInput == userEmail && senhaInput == userSenha){
        window.location.href=`./infoUser.html`
    }else{
        let alerta = document.getElementById('alert')
        alerta.style.display = 'flex'
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
