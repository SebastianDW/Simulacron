
/** estilo de los botones */


document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Eliminar la clase 'clicked' de todos los botones
            buttons.forEach(function (btn) {
                btn.classList.remove('clicked');
            });

            // Agregar la clase 'clicked' al botón clickeado
            this.classList.add('clicked');
        });
    });
});

var textoTitulo = document.getElementById("titular");

var pag_principal = document.getElementById("menu_principal");
var pag_perfil = document.getElementById("menu_perfil");
var pag_examen = document.getElementById("menu_examen");
var pag_estadisticas = document.getElementById("menu_estadisticas");


var boton1 = document.getElementById("btn_principal");
var boton2 = document.getElementById("btn_perfil");
var boton3 = document.getElementById("btn_examen");
var boton4 = document.getElementById("btn_estadisticas");

boton1.addEventListener("click", function () {
    pag_principal.style.display = "flex";
    pag_perfil.style.display = "none";
    pag_examen.style.display = "none";
    pag_estadisticas.style.display = "none";

    textoTitulo.textContent = "Menu Principal"
});

boton2.addEventListener("click", function () {
    pag_principal.style.display = "none";
    pag_perfil.style.display = "flex";
    pag_examen.style.display = "none";
    pag_estadisticas.style.display = "none";

    textoTitulo.textContent = "Perfil"
});

boton3.addEventListener("click", function () {
    pag_principal.style.display = "none";
    pag_perfil.style.display = "none";
    pag_examen.style.display = "flex";
    pag_estadisticas.style.display = "none";

    textoTitulo.textContent = "Examen"
});

boton4.addEventListener("click", function () {
    pag_principal.style.display = "none";
    pag_perfil.style.display = "none";
    pag_examen.style.display = "none";
    pag_estadisticas.style.display = "flex";

    textoTitulo.textContent = "Estadistica"
});
