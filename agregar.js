
// Usa las variables según sea necesario


const firebaseConfig = {
    apiKey: "AIzaSyD_6sd2DHrKhPNHeXzdoVFNk7h1AnG36Jc",
    authDomain: "basedatosexamen-3d552.firebaseapp.com",
    projectId: "basedatosexamen-3d552",
    storageBucket: "basedatosexamen-3d552.appspot.com",
    messagingSenderId: "855454895477",
    appId: "1:855454895477:web:42af52a151e0693b03573c"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();


/*

var boton = document.getElementById("buttonCrearCuenta");

boton.addEventListener("click", function () {

    var nombre = document.getElementById("input_nombre").value;
    var telefono = document.getElementById("input_telefono").value;
    var correo = document.getElementById("input_correo").value;
    var contrasena = document.getElementById("input_contrasena").value;



    if (nombre == "" || telefono == "" || correo == "" || contrasena == "") {
        alert("ingresa los datos correctamente");
    } else {

        try {
            db.collection("usuarios").add({
                nombre: nombre,
                telefono: telefono,
                correo: correo,
                contrasena: contrasena
            }).then(function (docRef) {
                console.log("Documento creado con ID: ", docRef.id);
                alert("Registrado Correctamente");
                window.location.href = 'main.html';
            }).catch(function (error) {
                console.error("Error al agregar el documento: ", error);
            });
        } catch (e) {
            console.error("Error al agregar el documento: ", e);
        }
    }
});

*/

var boton = document.getElementById("buttonCrearCuenta");

boton.addEventListener("click", function () {

    var nombre = document.getElementById("input_nombre").value;
    var telefono = document.getElementById("input_telefono").value;
    var correo = document.getElementById("input_correo").value;
    var contrasena = document.getElementById("input_contrasena").value;

    if (nombre == "" || telefono == "" || correo == "" || contrasena == "") {
        alert("Ingresa los datos correctamente");
    } else {
        // Realiza dos consultas separadas para verificar si ya existe un usuario con el número de teléfono o correo
        var telefonoQuery = db.collection("usuarios").where('telefono', '==', telefono).get();
        var correoQuery = db.collection("usuarios").where('correo', '==', correo).get();

        // Combina las dos consultas utilizando Promise.all
        Promise.all([telefonoQuery, correoQuery])
            .then((results) => {
                // Verifica si alguna de las consultas devuelve algún resultado
                if (results[0].empty && results[1].empty) {
                    // No hay usuarios con ese número de teléfono ni correo, puedes agregar el nuevo usuario
                    try {
                        db.collection("usuarios").add({
                            nombre: nombre,
                            telefono: telefono,
                            correo: correo,
                            contrasena: contrasena
                        }).then(function (docRef) {
                            console.log("Documento creado con ID: ", docRef.id);
                            alert("Registrado Correctamente");
                            window.location.href = 'main.html';
                        }).catch(function (error) {
                            console.error("Error al agregar el documento: ", error);
                        });
                    } catch (e) {
                        console.error("Error al agregar el documento: ", e);
                    }
                } else {
                    // Ya existe un usuario con ese número de teléfono o correo
                    alert("Ya existe un usuario con este número de teléfono o correo. Ingresa otro número o correo.");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la consulta:", error);
            });
    }
});


var botonIniciarSesion = document.getElementById("buttonIniciarSesion");

botonIniciarSesion.addEventListener("click", function () {
    var correoIniciarSesion = document.getElementById("iniciarSesionCorreo").value;
    var contrasenaIniciarSesion = document.getElementById("iniciarSesionContrasena").value;

    if (correoIniciarSesion == "" || contrasenaIniciarSesion == "") {
        alert("Ingresa tu correo y contraseña");
    } else {

        db.collection("usuarios")
            .where('correo', '==', correoIniciarSesion)
            .where('contrasena', '==', contrasenaIniciarSesion)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {

                    window.location.href = 'main.html';
                } else {
                    alert("Correo o contraseña incorrectos");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la consulta:", error);
            });
    }
});




/*
       nombre: baseDatosExamen 
        nombre app: examenSimulacro


        // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_6sd2DHrKhPNHeXzdoVFNk7h1AnG36Jc",
  authDomain: "basedatosexamen-3d552.firebaseapp.com",
  projectId: "basedatosexamen-3d552",
  storageBucket: "basedatosexamen-3d552.appspot.com",
  messagingSenderId: "855454895477",
  appId: "1:855454895477:web:42af52a151e0693b03573c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



*/