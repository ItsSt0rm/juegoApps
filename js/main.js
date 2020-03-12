
var secciones = [];
var tiempo_splash = 2000;
var imagenes = [];
var palabras = [];
var letrasImg = [];
var letrasOcultas = [];
var nivel = 2; //Se obtiene del localstorage
var palabraNivel;
var letrasAleatorias;


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
    palabraNivel = palabras[nivel];
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
    document.getElementById("niveljuego").innerHTML = nivel;
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
    //arrayLetras = suffle(arrayLetras);
    var letrasContenedor = document.getElementById("letrascontenedor");
    var salida = "";
    for (var i = 0; i < arrayLetras.length; i++) {
        salida += '<div id="letra' + i + '" class = "letras">' + arrayLetras[i] + '</div>';
    }

    letrasContenedor.innerHTML = salida;
    imagenLetra();
}

function imagenLetra(){ //Le pone a cada letra su imagen correspondiente
    
    for (var i = 0; i < 14; i++){
        var letra = document.getElementById("letra"+i);
        caracter = letra.innerHTML;
        letra.innerHTML += '<img src="img/jugar/teclado/'+caracter+'.png" />';
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