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