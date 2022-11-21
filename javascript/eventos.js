document.getElementById("boton__responsive").addEventListener("click", mostrarNavegacion);

document.getElementsByClassName("botonNavegar")[0].addEventListener("click", ocultarNavegacion);
document.getElementsByClassName("botonNavegar")[1].addEventListener("click", ocultarNavegacion);
document.getElementsByClassName("botonNavegar")[2].addEventListener("click", ocultarNavegacion);
document.getElementsByClassName("botonNavegar")[3].addEventListener("click", ocultarNavegacion);

function mostrarNavegacion() {

    if(document.getElementById("nodoNavegacion").className == "anular__navegacion") {
        
        document.getElementById("header__mobile").className = "mostrar__navegacion";
        document.getElementById("nodoNavegacion").className = "";
        document.getElementById("boton__responsive").className = "seleccionado";

    }else {
        ocultarNavegacion();
    }    
}

function ocultarNavegacion() {
    document.getElementById("header__mobile").className = "";
    document.getElementById("nodoNavegacion").className = "anular__navegacion";
    document.getElementById("boton__responsive").className = "sinSeleccionar";
}