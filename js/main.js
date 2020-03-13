
var secciones = [];
var tiempo_splash = 2000;
var imagenes = [];
var palabras = [];
var letrasOcultas = [];
var nivel = 1; //Se obtiene del localstorage
var monedas = 0; //LocalStorage
var letrasEliminadas;
var palabraNivel;
var letrasAleatorias;
var contenedorAnimal;



var puedeAñadirLetra = true;


//Imágenes
imagenes[1] = "img/jugar/img/unicornio1.png";
imagenes[2] = "img/jugar/img/unicornio2.png";
imagenes[3] = "img/jugar/img/unicornio3.png";
imagenes[4] = "img/jugar/img/unicornio4.png";
imagenes[5] = "img/jugar/img/dragon1.png";
imagenes[6] = "img/jugar/img/dragon2.png";
imagenes[7] = "img/jugar/img/dragon3.png";
imagenes[8] = "img/jugar/img/dragon4.png";
imagenes[9] = "img/jugar/img/sirena1.png";
imagenes[10] = "img/jugar/img/sirena2.png";
imagenes[11] = "img/jugar/img/sirena3.png";
imagenes[12] = "img/jugar/img/sirena4.png";

//Palabra

palabras[1] = "unicornio";
palabras[2] = "dragon";
palabras[3] = "sirena";



window.onload = function () {
    inicializarReferencias();
    setTimeout(cambiarSplash, tiempo_splash);
    contenedorAnimal = document.getElementById("nombreanimal");
    //nivel = localStorage.setItem("nivel", 1);
    //monedas = localStorage.setItem("monedas", 0);
    //localStorage.clear();
    nivel = localStorage.getItem("nivel");
    if(nivel == undefined) nivel = 1;
    monedas = localStorage.getItem("monedas");
    if(monedas == undefined) monedas = 0;
    letrasEliminadas = localStorage.getItem("letraseliminados");
    if(letrasEliminadas == undefined) letrasEliminadas = "";
}

function inicializarReferencias() {
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
}

function cambiarSplash() {
    secciones[1].className = "splash oculto";
    secciones[2].className = "home";
}

//https://developer.mozilla.org/es/docs/Web/API/Element/classList
//https://www.youtube.com/watch?v=2z0wMNHPbzk
function cambiarSeccion(id_seccion) {

    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }

    secciones[id_seccion].classList.add("animated");
    secciones[id_seccion].classList.add("headShake");
    secciones[id_seccion].classList.remove("oculto");
}

function cargarNivel() {
    palabraNivel = palabras[nivel];
    letrasOcultas = [];
    document.getElementById("niveljuego").innerHTML = nivel;
    document.getElementById("monedasjuego").innerHTML = monedas;
    contenedorAnimal.innerHTML = null;
    puedeAñadirLetra = true;
    contenedorAnimal.className = "fondoanimalnormal";
    cargarImagenes();
    repartirLetras();
}

function cargarImagenes() {

    var idPista = 1;
    var indiceImg = nivel * 4;
    for (var i = indiceImg; i >= indiceImg - 3; i--) {
        document.getElementById("pista" + idPista).src = imagenes[i];
        idPista++;
    }
}

function repartirLetras() {

    letrasAleatorias = conseguirAleatorias(palabraNivel);
    var letrasNivel = palabraNivel + letrasAleatorias;
    arrayLetras = letrasNivel.split("");
    shuffle(arrayLetras);
    var letrasContenedor = document.getElementById("letrascontenedor");
    var salida = "";
    for (var i = 0; i < arrayLetras.length; i++) {
        salida += '<div id="letra' + i + '" class = "letras" onclick="clickLetra(' + i + ')">' + arrayLetras[i] + '</div>';
    }

    letrasContenedor.innerHTML = salida;
    imagenLetra();
}

function shuffle(a) { //Fisher-Yates shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function imagenLetra() { //Le pone a cada letra su imagen correspondiente

    for (var i = 0; i < 14; i++) {
        var letra = document.getElementById("letra" + i);
        caracter = letra.innerHTML;
        letra.innerHTML += '<img src="img/jugar/teclado/' + caracter + '.png" />';

    }

}

function conseguirAleatorias(nivelPalabra) { //Devuelve una cadena con letras aleatorias que no están en la palabra del nivel
    var aleatorias = "abcdefghijklmnopqrstuvwxy";
    var vectorResultante = [];
    vectorResultante = aleatorias.split("");
    var stringAleatorio = "";

    //alert(palabras[nivel]);
    limite = 14 - nivelPalabra.length;
    indice = 0;
    while (stringAleatorio.length != limite) {

        if (nivelPalabra.indexOf(vectorResultante[indice]) == -1) {
            stringAleatorio += vectorResultante[indice];

        }
        indice++;


    }

    return stringAleatorio;
}

function clickLetra(id) {
    if (puedeAñadirLetra) {
        var letra = document.getElementById("letra" + id);
        caracter = letra.innerHTML.substring(0, 1);
        contenedorAnimal.innerHTML += caracter.toUpperCase();
        letra.classList.add("letraoculta");
        letrasOcultas.push(id);
        verificarPalabra();
    }
}

function verificarPalabra() {
    if (contenedorAnimal.innerHTML.length == palabras[nivel].length) {
        puedeAñadirLetra = false;
        var palabra = contenedorAnimal.innerHTML;

        if (palabra.toLowerCase() == palabras[nivel]) {
            contenedorAnimal.className = "fondoanimalcorrecto";
            nuevoNivel = parseInt(nivel) + 1;
            localStorage.setItem("nivel", nuevoNivel);
            nuevasMonedas = parseInt(monedas) + 10;
            localStorage.setItem("monedas", nuevasMonedas);
        } else {
            contenedorAnimal.className = "fondoanimalincorrecto";
            console.log("Incorrecto");
        }
    }
}

function ayudaJuego() {
    var splitAleatorias = letrasAleatorias.split("");
    for (var i = 0; i < 14; i++){
        letra = document.getElementById("letra"+i).innerHTML;
        caracterLetra = letra.substring(0,1);
        if(caracterLetra.indexOf(splitAleatorias[i]) == -1){
            letrasEliminadas += caracterLetra;
            letra.classList.className = "letraeliminada";
        }
    }
}

function borrarTodo() {
    puedeAñadirLetra = true;
    contenedorAnimal.className = "fondoanimalnormal";
    contenedorAnimal.innerHTML = null;
    nOcultas = letrasOcultas.length;
    for (var i = 0; nOcultas; i++) {
        elementoOculto = letrasOcultas.pop();
        elemento = document.getElementById("letra" + elementoOculto);
        elemento.classList.remove("letraoculta");
    }
}