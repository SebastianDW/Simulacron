/* Control de ingreso*/


const paginaTransparente = document.getElementById("seccionTransparencia");
const paginaIngresoForm = document.getElementById("seccionSesion");
const paginaRegistroForm = document.getElementById("seccionRegistro");

function ingresarFormulario() {
    console.log("carga");
    paginaTransparente.style.display = "flex";
    paginaIngresoForm.style.display = "flex";
    paginaRegistroForm.style.display = "none";

}
function registrarFormulario() {
    console.log("carga");
    paginaTransparente.style.display = "flex";
    paginaIngresoForm.style.display = "none";
    paginaRegistroForm.style.display = "flex";
}

function salirTransparencia() {
    console.log("carga");
    paginaTransparente.style.display = "none";
    paginaIngresoForm.style.display = "none";
    paginaRegistroForm.style.display = "none";
}
/*

    realizar confirmacion de cuenta login , registro y inicio de sesion. 
    tambien botones aparte, de los que tienen en la misma pagina.

    registrar sesion, simplemente registra al usuario y obtiene al usuario abre su sesión,
    la de iniciar sesion busca identifica usuario y lo obtiene.

*/

/*enlaces*/ 