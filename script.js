//Funcion que aplica estilo a la opcion del menu seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = ""; 
    link.className = "seleccionado";
}

// Hacemos desaparecer el menu una vez seleccionado en el modo responsive

var x = document.getElementById("nav");
x.className = "";

// Funcion Muestra Menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
       x.className = "responsive"; 
    } else {
        x.className = "";
    }
}

// Detecto Scrolling para animacion de las barras
    window.onscroll = function(){
        efectoHabilidades()
    };

// Funcion para barra de habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("javascript").classList.add("barra-progreso2");
    } 
}
