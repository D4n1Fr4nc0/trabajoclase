let nombre, correo, mensaje;
let formulario = document.getElementById('form')
formulario.addEventListener('submit', (e)=>{e.preventDefault()})
function LeerDatos(){
    nombre =document.getElementById('nombre').value
    correo =document.getElementById('correo').value
    mensaje =document.querySelector('#textarea').value
    console.log(nombre)z
}


