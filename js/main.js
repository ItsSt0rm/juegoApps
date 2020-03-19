
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
var letrasContenedor;
var nivelJuego;
var nivelJuego1;
var monedasJuego;



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
imagenes[13] = "img/jugar/img/cerbero1.png";
imagenes[14] = "img/jugar/img/cerbero2.png";
imagenes[15] = "img/jugar/img/cerbero3.png";
imagenes[16] = "img/jugar/img/cerbero4.png";
imagenes[17] = "img/jugar/img/fenix1.png";
imagenes[18] = "img/jugar/img/fenix2.png";
imagenes[19] = "img/jugar/img/fenix3.png";
imagenes[20] = "img/jugar/img/fenix4.png";
imagenes[21] = "img/jugar/img/grifo1.png";
imagenes[22] = "img/jugar/img/grifo2.png";
imagenes[23] = "img/jugar/img/grifo3.png";
imagenes[24] = "img/jugar/img/grifo4.png";
imagenes[25] = "img/jugar/img/hidra1.png";
imagenes[26] = "img/jugar/img/hidra2.png";
imagenes[27] = "img/jugar/img/hidra3.png";
imagenes[28] = "img/jugar/img/hidra4.png";
imagenes[29] = "img/jugar/img/horus1.png";
imagenes[30] = "img/jugar/img/horus2.png";
imagenes[31] = "img/jugar/img/horus3.png";
imagenes[32] = "img/jugar/img/horus4.png";
imagenes[33] = "img/jugar/img/manticora1.png";
imagenes[34] = "img/jugar/img/manticora2.png";
imagenes[35] = "img/jugar/img/manticora3.png";
imagenes[36] = "img/jugar/img/manticora4.png";
imagenes[37] = "img/jugar/img/medusa1.png";
imagenes[38] = "img/jugar/img/medusa2.png";
imagenes[39] = "img/jugar/img/medusa3.png";
imagenes[40] = "img/jugar/img/medusa4.png";
imagenes[41] = "img/jugar/img/minotauro1.png";
imagenes[42] = "img/jugar/img/minotauro2.png";
imagenes[43] = "img/jugar/img/minotauro3.png";
imagenes[44] = "img/jugar/img/minotauro4.png";
imagenes[45] = "img/jugar/img/naga1.png";
imagenes[46] = "img/jugar/img/naga2.png";
imagenes[47] = "img/jugar/img/naga3.png";
imagenes[48] = "img/jugar/img/naga4.png";
imagenes[49] = "img/jugar/img/pegaso1.png";
imagenes[50] = "img/jugar/img/pegaso2.png";
imagenes[51] = "img/jugar/img/pegaso3.png";
imagenes[52] = "img/jugar/img/pegaso4.png";
imagenes[53] = "img/jugar/img/triton1.png";
imagenes[54] = "img/jugar/img/triton2.png";
imagenes[55] = "img/jugar/img/triton3.png";
imagenes[56] = "img/jugar/img/triton4.png";

//Palabra

palabras[1] = "unicornio";
palabras[2] = "dragon";
palabras[3] = "sirena";
palabras[4] = "cerbero";
palabras[5] = "fenix";
palabras[6] = "grifo";
palabras[7] = "hidra";
palabras[8] = "horus";
palabras[9] = "manticora";
palabras[10] = "medusa";
palabras[11] = "minotauro";
palabras[12] = "naga";
palabras[13] = "pegaso";
palabras[14] = "triton";


window.onload = function () {
    inicializarReferencias();
    setTimeout(cambiarSplash, tiempo_splash);
    contenedorAnimal = document.getElementById("nombreanimal");
    //localStorage.clear();
    nivel = localStorage.getItem("nivel");
    if (nivel == undefined) nivel = 1;
    monedas = localStorage.getItem("monedas");
    if (monedas == undefined) monedas = 0;
    letrasEliminadas = localStorage.getItem("letraseliminadas");
    if (letrasEliminadas == undefined) letrasEliminadas = "";
}

function inicializarReferencias() {
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
    secciones[6] = document.getElementById("seccion_6");
    secciones[7] = document.getElementById("seccion_7");

    letrasContenedor = document.getElementById("letrascontenedor");
    nivelJuego = document.getElementById("niveljuego");
    nivelJuego1 = document.getElementById("niveljuego1");
    monedasJuego = document.getElementById("monedasjuego");

}

function cambiarSplash() {
    secciones[1].className = "splash oculto";
    secciones[2].className = "home";
}

function cambiarSeccion(id_seccion) {

    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }

    secciones[id_seccion].classList.add("animated");
    secciones[id_seccion].classList.add("headShake");
    secciones[id_seccion].classList.remove("oculto");
}

function cargarNivel() {
    nivel = localStorage.getItem("nivel");
    if (nivel == undefined) nivel = 1;
    monedas = localStorage.getItem("monedas");
    if (monedas == undefined) monedas = 0;
    letrasEliminadas = localStorage.getItem("letraseliminadas");
    if (letrasEliminadas == undefined) letrasEliminadas = "";

    if(nivel == 15){
        alert("¡Felicidades, has completado todos los niveles! Gracias por jugar");
        localStorage.clear();
        location.reload();
    }
    palabraNivel = palabras[nivel];
    letrasOcultas = [];
    nivelJuego.innerHTML = nivel;
    nivelJuego1.innerHTML = nivel;
    monedasJuego.innerHTML = monedas;
    contenedorAnimal.innerHTML = null;
    puedeAñadirLetra = true;
    contenedorAnimal.className = "fondoanimalnormal";
    cargarImagenes();
    repartirLetras();
    cargarEliminadas();
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
            letrasEliminadas = "";
            localStorage.setItem("letraseliminadas", letrasEliminadas);
            contenedorAnimal.className = "fondoanimalcorrecto";
            nuevoNivel = parseInt(nivel) + 1;
            localStorage.setItem("nivel", nuevoNivel);
            nuevasMonedas = parseInt(monedas) + 10;
            localStorage.setItem("monedas", nuevasMonedas);
            setTimeout(cambiarPalabra, 800);
        } else {
            contenedorAnimal.className = "fondoanimalincorrecto";

        }
    }
}

function cambiarPalabra() {
    secciones[3].className = "juego oculto";
    secciones[6].className = "money-ten";
}


function ayudaJuego() {
    //var splitOcultas = letrasOcultas.split("");
    if (monedas < 5) {
        alert("No tienes monedas suficientes");
        return;
    }




    for (var i = 0; i < 14; i++) {
        var letra = document.getElementById("letra" + i);
        var clasesLetra = letra.className;
        caracterLetra = letra.innerHTML.substring(0, 1);
        if (letrasAleatorias.indexOf(caracterLetra) != -1) {
            if ((letrasEliminadas.indexOf(caracterLetra) == -1)) {
                letrasEliminadas += caracterLetra;
                localStorage.setItem("letraseliminadas", letrasEliminadas);
                letra.className = "letraeliminada " + clasesLetra;
                monedas -= parseInt(5);
                localStorage.setItem("monedas", monedas);
                monedasJuego.innerHTML = monedas;
                break;
            }
        }
    }
}

function cargarEliminadas() {
    for (var i = 0; i < 14; i++) {
        var letra = document.getElementById("letra" + i);
        var clasesLetra = letra.className;
        caracterLetra = letra.innerHTML.substring(0, 1);

        if (letrasEliminadas.indexOf(caracterLetra) != -1) {
            letra.className = "letraeliminada " + clasesLetra;
        }
    }
}

function borrarTodo() {
    puedeAñadirLetra = true;
    contenedorAnimal.className = "fondoanimalnormal";
    contenedorAnimal.innerHTML = null;
    nOcultas = letrasOcultas.length;
    for (var i = 0; i < nOcultas; i++) {
        elementoOculto = letrasOcultas.pop();
        elemento = document.getElementById("letra" + elementoOculto);
        elemento.classList.remove("letraoculta");
    }
}

