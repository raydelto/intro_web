function saludar(){
    var nombre = document.getElementById("txtNombre");
    var respuesta = document.getElementById("txtRespuesta");

    respuesta.innerHTML = "Hola " + nombre.value;
}