
    var secciones = [];
    var tiempo_splash = 2000;
    var imagenes = [];
    var nivel = 2; //Se obtiene del localstorage

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






    window.onload = function () {
        inicializarReferencias();
        setTimeout(cambiarSplash, tiempo_splash);
        
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

    function cargarNivel(){
        document.getElementById("niveljuego").innerHTML = nivel;
        cargarImagenes();
    }

    function cargarImagenes(){
         
        var idPista = 1;
        var indiceImg = nivel*4;
        for (var i = indiceImg; i >= indiceImg - 3; i--){
            document.getElementById("pista"+idPista).src=imagenes[i];
            idPista++;
        }
    }