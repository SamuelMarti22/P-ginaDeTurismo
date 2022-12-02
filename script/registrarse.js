let formulario = document.getElementById('formularioRegistrarse')

formulario.addEventListener('submit', e => {
    e.preventDefault();
    recogerInfo()
})

//Validar la información

function montarInfo(nombre,email,contraseña,contraseña2){

}

//Recopilar la información

function recogerInfo() {
    let nombre = document.querySelector('#nombre').value
    let email = document.querySelector('#email').value
    let contraseña = document.querySelector('#contraseña').value
    let contraseña2 = document.querySelector('#contraseña2').value
    let validacion = true

    if (nombre == ''){
        formulario.querySelector('.nombre').classList.add('activo')
        validacion = false
    } else{
        formulario.querySelector('.nombre').classList.remove('activo')
    }
    if (email == ''){
        formulario.querySelector('.email').classList.add('activo')
        validacion = false
    } else{
        formulario.querySelector('.email').classList.remove('activo')
    }
    if (contraseña == ''){
        formulario.querySelector('.contraseña').classList.add('activo')
        validacion = false
    } else{
        formulario.querySelector('.contraseña').classList.remove('activo')
    }
    if (contraseña2 != contraseña){
        formulario.querySelector('.contraseña2').classList.add('activo')
        validacion = false
    }
    else{
        formulario.querySelector('.contraseña2').classList.remove('activo')
    }
    if (validacion == true){
        localStorage.setItem('nombre', nombre)
        localStorage.setItem('email', email)
        localStorage.setItem('contraseña', contraseña)
        localStorage.setItem('contraseña2', contraseña2)
    }
}