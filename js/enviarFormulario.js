let nombre = document.getElementById('txtNombre');
let correo = document.getElementById('txtCorreo');
let mensaje = document.getElementById('txtMensaje');

const form = document.getElementById('contacto');

form.addEventListener('submit', (e) => {
    
    e.preventDefault(); 
      
      enviarFormulario(nombre.value,correo.value,mensaje.value);

      form.reset();
   })
function enviarFormulario(nombre, correo, mensaje) {
    Email.send({
        SecureToken : "46fb6390-2474-4d9b-9fd2-d5b433f7c0fa",
        To: "maxi.8379@gmail.com",
        From: "info@carpinteriamax.com",
        Subject: `Recibiste un mensaje de la pagina web`,
        Body: `<p>Nombre: <b>${nombre}</b></p>
                <p>Email: <b>${correo}</b></p>
                <p>Consulta: <b>${mensaje}</b></p>
        `
        }).then(
        message=>swal("Consulta enviada correctamente", "Muchas gracias por comunicarte, nos pondremos en contacto pronto", "success")
    )
    .catch(error => console.log('error: ', error))

    if(enviarFormulario==true){
        console.log("Mensaje enviado")
    }
}