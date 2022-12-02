let formulario = document.getElementById('formularioRegistrarse')

formulario.addEventListener('submit', e => {
    e.preventDefault();
    recogerInfo()
})

function recogerInfo() {
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellidos').value
    let nombreUsuario = document.querySelector('#nombreUsuario').value
    let email = document.querySelector('#email').value
    let contraseña = document.querySelector('#contraseña').value

    localStorage.setItem('nombre', nombre)
    localStorage.setItem('apellido', apellido)
    localStorage.setItem('nombreUsuario', nombreUsuario)
    localStorage.setItem('email', email)
    localStorage.setItem('contraseña', contraseña)
}