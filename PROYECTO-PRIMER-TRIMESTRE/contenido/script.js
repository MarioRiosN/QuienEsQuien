seleccion = "";
intentos = 10;
t= 1;
window.addEventListener("load", iniciar);
function iniciar() {
    for (i = 1; i <= 151; i++) {
        caja=document.createElement("div");
        caja.setAttribute("class", "contenedorPokemon");
        caja.setAttribute("id", i);
        nodo = document.createElement("img");
        nombre = `POKEMON/${i}.png`;
        nodo.setAttribute("src", nombre);
        nodo.setAttribute("class", "pokemon");
        switch (i) {
            case 1: case 2: case 3: case 43: case 44: case 45: case 69: case 70: case 71: case 102: case 103: case 114:
                nodo.setAttribute("tipo1", "planta");
                break;
            case 4: case 5: case 6: case 37: case 38: case 58: case 59: case 77: case 78: case 126: case 136: case 146:
                nodo.setAttribute("tipo1", "fuego");
                break;
            case 7: case 8: case 9: case 54: case 55: case 60: case 61: case 62: case 72: case 73: case 79: case 80: case 86: case 87: case 90: case 91: case 98: case 99: case 116: case 117: case 118: case 119: case 120: case 121: case 129: case 130: case 131: case 134: 
                nodo.setAttribute("tipo1", "agua");
                break;
            case 10: case 11: case 12: case 13: case 14: case 15: case 46: case 47: case 48: case 49: case 123:  case 127:
                nodo.setAttribute("tipo1", "bicho");
                break;
            case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 39: case 40: case 52: case 53: case 83: case 84: case 85: case 108: case 113:  case 115: case 128: case 132: case 133: case 137: case 143:
                nodo.setAttribute("tipo1", "normal");
                break;
            case 23: case 24: case 29: case 30: case 31: case 32: case 33: case 34: case 41: case 42: case 88: case 89: case 109: case 110:
                nodo.setAttribute("tipo1", "veneno");
                break;
            case 25: case 26: case 81: case 82: case 100: case 101: case 125: case 135: case 145:
                nodo.setAttribute("tipo1", "electrico");
                break;
            case 27: case 28: case 50: case 51: case 104: case 105: case 111: case 112:
                nodo.setAttribute("tipo1", "tierra");
                break;
            case 35: case 36:
                nodo.setAttribute("tipo1", "hada");
                break;
            case 56: case 57: case 66: case 67: case 68: case 106: case 107:
                nodo.setAttribute("tipo1", "lucha");
                break;
            case 63: case 64: case 65: case 96: case 97: case 122: case 150: case 151:
                nodo.setAttribute("tipo1", "psiquico");
                break;
            case 74: case 75: case 76: case 95: case 138: case 139: case 140: case 141: case 142:
                nodo.setAttribute("tipo1", "roca");
                break;
            case 92: case 93: case 94:
                nodo.setAttribute("tipo1", "fantasma");
                break;
            case 124: case 144:
                nodo.setAttribute("tipo1", "hielo");
                break;
            case 147: case 148: case 149:
                nodo.setAttribute("tipo1", "dragon");
                break;
        }
        switch(i){
            case 1: case 2: case 3: case 13: case 14: case 15: case 43: case 44: case 45: case 48: case 49: case 69: case 70: case 71: case 72: case 73: case 92: case 93: case 94:
                nodo.setAttribute("tipo2", "veneno");
                break;
            case 6: case 12: case 16: case 17: case 18: case 21: case 22: case 41: case 42: case 83: case 84: case 85: case 123: case 130: case 142: case 144: case 145: case 146: case 149:
                nodo.setAttribute("tipo2", "volador");
                break;
            case 31: case 34: case 74: case 75: case 76: case 95:
                nodo.setAttribute("tipo2", "tierra");
                break;
            case 39: case 40: case 122:
                nodo.setAttribute("tipo2", "hada");
                break;
            case 46: case 47:
                nodo.setAttribute("tipo2", "planta");
                break;
            case 62:
                nodo.setAttribute("tipo2", "lucha");
                break;
            case 79: case 80: case 102: case 103: case 121: case 124:
                nodo.setAttribute("tipo2", "psiquico");
                break;
            case 81: case 82:
                nodo.setAttribute("tipo2", "acero");
                break;
            case 87: case 91: case 131: 
                nodo.setAttribute("tipo2", "hielo");
                break;
            case 111: case 112:
                nodo.setAttribute("tipo2", "roca");
                break;
            case 138: case 139: case 140: case 141:
                nodo.setAttribute("tipo2", "agua");
                break;
        }
        switch(i){
            case 1: case 4: case 7: case 10: case 13: case 16: case 19: case 21: case 23: case 25: case 27: case 29: case 32: case 35: case 37: case 39: case 41: case 43: case 46: case 48: case 50: case 52: case 54: case 56: case 58: case 60: case 63: case 66: case 69: case 72: case 74: case 77: case 79: case 81: case 83: case 84: case 86: case 88: case 90: case 92: case 95: case 96: case 98: case 100: case 102: case 104: case 106: case 107: case 108: case 109: case 111: case 113: case 114: case 115: case 116: case 118: case 120: case 122: case 123: case 124: case 125: case 126: case 127: case 128: case 129: case 131: case 132: case 133: case 137: case 138: case 140: case 142: case 143: case 144: case 145: case 146: case 147: case 150: case 151:
                nodo.setAttribute("evo", "primera");
                break;
            case 2: case 5: case 8: case 11: case 14: case 17: case 20: case 22: case 24: case 26: case 28: case 30: case 33: case 36: case 38: case 40: case 42: case 44: case 47: case 49: case 51: case 53: case 55: case 57: case 59: case 61: case 64: case 67: case 70: case 73: case 75: case 78: case 80: case 82: case 85: case 87: case 89: case 91: case 93: case 97: case 99: case 101: case 103: case 105: case 110: case 112: case 117: case 119: case 121: case 130: case 134: case 135: case 136: case 139: case 141: case 148:
                nodo.setAttribute("evo", "segunda");
                break;
            default:
                nodo.setAttribute("evo", "tercera");
                break;
        }
        switch(i){
            case 1: case 2: case 3: case 10: case 11: case 123: case 143:
                nodo.setAttribute("color", "verde");
                break;
            case 4: case 6: case 26: case 37: case 46: case 47: case 58: case 59: case 98: case 99: case 136: case 146: case 149:
                nodo.setAttribute("color", "naranja");
                break;
            case 5: case 100: case 124: case 129:
                nodo.setAttribute("color", "rojo");
                break;
            case 7: case 8: case 9: case 29: case 30: case 31: case 41: case 42: case 43: case 44: case 45: case 55: case 60: case 61: case 62: case 72: case 73: case 114: case 116: case 117: case 130: case 131: case 134: case 138: case 139: case 144: case 148:
                nodo.setAttribute("color", "azul");
                break;
            case 12: case 19: case 23: case 24: case 32: case 33: case 34: case 48: case 49: case 88: case 89: case 90: case 91: case 92: case 93: case 94: case 109: case 110: case 121: case 147:
                nodo.setAttribute("color","morado");
                break;
            case 13: case 20: case 21: case 22: case 50: case 51: case 84: case 85: case 103: case 104: case 105: case 106: case 107: case 115: case 120: case 127: case 128: case 133: case 140: case 141:
                nodo.setAttribute("color","marron");
                break;
            case 14: case 15: case 25: case 27: case 28: case 54: case 63: case 64: case 65: case 69: case 70: case 71: case 96: case 97: case 125: case 126: case 135: case 145:
                nodo.setAttribute("color","amarillo");
                break;
            case 16: case 17: case 18: case 38: case 52: case 53: case 56: case 57: case 77: case 78: case 83: case 86: case 87: case 101: case 118:
                nodo.setAttribute("color","blanco/beige");
                break;
            case 35: case 36: case 39: case 40: case 79: case 80: case 102: case 108: case 113: case 119: case 122: case 132: case 137: case 151:
                nodo.setAttribute("color","rosa");
                break;
            case 66: case 67: case 68: case 74: case 75: case 76: case 81: case 82: case 95: case 111: case 112: case 142: case 150:
                nodo.setAttribute("color","gris");
                break;
            /*Nos quedamos en  Clefairy*/
            /*que hacemos con voltorb y electrode¿? los pongo de momento voltorb rojo y el electrode blanco¿? (nº100 y 101)*/ 
            /*He puesto el blanco y beige juntos porque quita de posibles dudas*/
            /*Hitmonchan (nº107 lo he puesto marrón por su piel(¿moro?), pero puede ser morado)*/
        }
        switch(i){
            case 1: case 2: case 3: case 19: case 20: case 23: case 24: case 29: case 30: case 31: case 32: case 33: case 34: case 37: case 38: case 39: case 40: case 43: case 44: case 45: case 58: case 59: case 77: case 78: case 83: case 84: case 85: case 96: case 97: case 108: case 114: case 115: case 123: case 125: case 128:
                nodo.setAttribute("habitat", "pradera");
                break;
            case 4: case 5: case 6: case 35: case 36: case 56: case 57: case 66: case 67: case 68: case 74: case 75: case 76: case 104: case 105: case 126: case 142: case 143:
                nodo.setAttribute("habitat", "montaña");
                break;
            case 7: case 8: case 9: case 54: case 55: case 60: case 61: case 62: case 79: case 80: case 98: case 99: case 118: case 119: case 129: case 130: case 147: case 148: case 149:
                nodo.setAttribute("habitat", "agua dulce");
                break;
            case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 25: case 26: case 46: case 47: case 48: case 49: case 69: case 70: case 71: case 102: case 103: case 127:
                nodo.setAttribute("habitat", "bosque");
                break;
            case 21: case 22: case 27: case 28: case 81: case 82: case 111: case 112: 
                nodo.setAttribute("habitat", "campo");
                break;
            case 41: case 42: case 50: case 51: case 92: case 93: case 94: case 95: 
                nodo.setAttribute("habitat", "caverna");
                break;
            case 52: case 53: case 63: case 64: case 65: case 88: case 89: case 100: case 101: case 106: case 107: case 109: case 110: case 113: case 122: case 124: case 132: case 133: case 134: case 135: case 136: case 137:
                nodo.setAttribute("habitat", "ciudad");
                break;
            case 72: case 73: case 86: case 87: case 90: case 91: case 116: case 117: case 120: case 121: case 131: case 138: case 139: case 140: case 141:
                nodo.setAttribute("habitat", "agua salada");
                break;
            case 144: case 145: case 146: case 150: case 151:
                nodo.setAttribute("habitat", "raro");
                break;
            
        }
        caja.appendChild(nodo);
        document.getElementById("tabla").appendChild(caja);
        document.getElementsByClassName("contenedorPokemon")[i-1].children[0].setAttribute("draggable","true");
        document.getElementsByClassName("contenedorPokemon")[i-1].children[0].setAttribute("ondragstart","drag(event)");
        document.getElementsByClassName("contenedorPokemon")[i-1].addEventListener("mouseover", mostrarDatos);
    }
    seleccion =document.getElementsByClassName("pokemon")[parseInt(Math.random() * 151)];
    sessionStorage.setItem("seleccionSRC", seleccion.getAttribute("src").substr(8,1));
    botones = document.getElementsByTagName("button");
    for (i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", boton);
    }
    document.getElementById("entrenador").src="TRAINER/"+sessionStorage.getItem("entrenadorSS")+".png";
    crono = document.getElementById("contador");
    repetirCadaSegundo();
}
function repetirCadaSegundo() {
    identificadorIntervaloDeTiempo = setInterval(cuenta, 1000);
}
function cuenta(){
    crono.innerHTML=`TIEMPO: ${t}`;
    t++;
}
function boton() {
    switch (this.previousElementSibling.className) {
        case "tipos":
            evaluarTipos();
            break;
        case "evos":
            evaluarEvos();
            break;
        case "colors":
            evaluarColors();
            break;
        case "habitats":
            evaluarHabitats();
            break;
    }
    intentos--;
    document.getElementById("intentos").innerHTML=`TE QUEDAN ${intentos} PREGUNTAS`;
    if(intentos=="0"){
        document.getElementById("preguntas").remove();
        document.getElementById("intentos").innerHTML="NO TE QUEDAN PREGUNTAS. <br> SELECCIONA EL POKEMON";
    }
}

function ventanaFinal(ev){
    ev.preventDefault();
    sessionStorage.setItem("preguntasRestantes", intentos);
    sessionStorage.setItem("tiempoJuego", t);
    window.open("infoPokemon.html", "_self");
}
function mostrarDatos(){
    ventanita= document.createElement("div");
    ventanita.className="datosPokemon";
    document.getElementById("ventana").appendChild(ventanita);
    this.addEventListener("mouseout", borrarDatos);
    this.addEventListener("mousemove", moverDatos);
    solapaArriba = document.createElement("img");
    solapaArriba.setAttribute("src", "pokedexArriba.png");
    solapaArriba.setAttribute("id","solapaArriba");
    document.getElementById("ventana").appendChild(solapaArriba);
    tipo1 = document.createElement("p");
    nodo1 = document.createTextNode(`Tipo 1: ${this.children[0].getAttribute("tipo1")}`);
    tipo1.appendChild(nodo1);
    document.getElementsByClassName("datosPokemon")[0].appendChild(tipo1);
    solapaAbajo = document.createElement("img");
    solapaAbajo.setAttribute("src","pokedexAbajo.png");
    solapaAbajo.setAttribute("id","solapaAbajo");
    document.getElementById("ventana").appendChild(solapaAbajo);
    ventanita.style.backgroundImage="url("+this.children[0].getAttribute("src")+")";
    if(this.children[0].getAttribute("tipo2")!=null){
        tipo2 = document.createElement("p");
        nodo2 = document.createTextNode(`Tipo 2: ${this.children[0].getAttribute("tipo2")}`);
        tipo2.appendChild(nodo2);
        document.getElementsByClassName("datosPokemon")[0].appendChild(tipo2);
    }

    evo = document.createElement("p");
    nodo3 = document.createTextNode(`Evolución: ${this.children[0].getAttribute("evo")}`);
    evo.appendChild(nodo3);
    document.getElementsByClassName("datosPokemon")[0].appendChild(evo);

    color = document.createElement("p");
    nodo4 = document.createTextNode(`Color principal: ${this.children[0].getAttribute("color")}`);
    color.appendChild(nodo4);
    document.getElementsByClassName("datosPokemon")[0].appendChild(color);

    habitat = document.createElement("p");
    nodo5 = document.createTextNode(`Habitat: ${this.children[0].getAttribute("habitat")}`);
    habitat.appendChild(nodo5);
    document.getElementsByClassName("datosPokemon")[0].appendChild(habitat);
    
}
function borrarDatos(){
    document.getElementsByClassName("datosPokemon")[0].remove();
    document.getElementById("solapaArriba").remove();
    document.getElementById("solapaAbajo").remove();
}
function moverDatos(e){
        if(e.clientY>470){
            document.getElementsByClassName("datosPokemon")[0].style.top=`${(e.clientY-287)}px`;
            document.getElementsByClassName("datosPokemon")[0].style.left=`${(e.clientX+13)}px`;
            document.getElementById("solapaArriba").style.top=`${(e.clientY-287)}px`;
            document.getElementById("solapaArriba").style.left=`${(e.clientX+13)}px`;
            document.getElementById("solapaAbajo").style.top=`${(e.clientY-187)}px`;
            document.getElementById("solapaAbajo").style.left=`${(e.clientX+13)}px`;
        }else{ 
            document.getElementsByClassName("datosPokemon")[0].style.top=`${(e.clientY+113)}px`;
            document.getElementsByClassName("datosPokemon")[0].style.left=`${(e.clientX+13)}px`;
            document.getElementById("solapaArriba").style.top=`${(e.clientY+113)}px`;
            document.getElementById("solapaArriba").style.left=`${(e.clientX+13)}px`;
            document.getElementById("solapaAbajo").style.top=`${(e.clientY+213)}px`;
            document.getElementById("solapaAbajo").style.left=`${(e.clientX+13)}px`;
    } 
}
function evaluarTipos() {
    if (document.getElementsByClassName("tipos")[0].value == seleccion.getAttribute("tipo1") || document.getElementsByClassName("tipos")[0].value == seleccion.getAttribute("tipo2")) {
        for (i = 0; i < 151; i++) {
            if (document.getElementsByClassName("pokemon")[i].getAttribute("tipo1") != document.getElementsByClassName("tipos")[0].value && document.getElementsByClassName("pokemon")[i].getAttribute("tipo2") != document.getElementsByClassName("tipos")[0].value) {
                /* document.getElementsByClassName("pokemon")[i].style.filter="brightness(0)"; */
                /* document.getElementsByClassName("pokemon")[i].src="4.png"; */
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                    document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                    document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                    document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                    document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`Es tipo: ${document.getElementsByClassName("tipos")[0].value}`;
        document.getElementById("pistas").appendChild(texto);
    }else{
        for (i = 0; i < 151; i++) {
            if (document.getElementsByClassName("pokemon")[i].getAttribute("tipo1") == document.getElementsByClassName("tipos")[0].value || document.getElementsByClassName("pokemon")[i].getAttribute("tipo2") == document.getElementsByClassName("tipos")[0].value) {
                /* document.getElementsByClassName("pokemon")[i].style.filter="brightness(0)"; */
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`No es tipo: ${document.getElementsByClassName("tipos")[0].value}`;
        document.getElementById("pistas").appendChild(texto);
    }
    document.getElementById(document.getElementsByClassName("tipos")[0].value).remove();
}

function evaluarEvos(){
    if(document.getElementsByClassName("evos")[0].value == seleccion.getAttribute("evo")){
        for(i = 0; i < 151; i++){
            if(document.getElementsByClassName("pokemon")[i].getAttribute("evo") != document.getElementsByClassName("evos")[0].value){
                /* document.getElementsByClassName("pokemon")[i].style.filter="brightness(0)"; */
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`Es ${document.getElementsByClassName("evos")[0].value} evo`;
        document.getElementById("pistas").appendChild(texto);
    }else{
        for(i = 0; i < 151; i++){
            if(document.getElementsByClassName("pokemon")[i].getAttribute("evo") == document.getElementsByClassName("evos")[0].value){
               /*  document.getElementsByClassName("pokemon")[i].style.filter="brightness(0)"; */
               document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
               document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
               document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
               document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`No es ${document.getElementsByClassName("evos")[0].value} evo`;
        document.getElementById("pistas").appendChild(texto);
    }
    document.getElementById(document.getElementsByClassName("evos")[0].value).remove();
}

function evaluarColors(){
    if (document.getElementsByClassName("colors")[0].value == seleccion.getAttribute("color")){
        for (i = 0; i < 151; i++) {
            if (document.getElementsByClassName("pokemon")[i].getAttribute("color") != document.getElementsByClassName("colors")[0].value) {
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`Es de color: ${document.getElementsByClassName("colors")[0].value}`;
        document.getElementById("pistas").appendChild(texto);
    }else{
        for (i = 0; i < 151; i++) {
            if (document.getElementsByClassName("pokemon")[i].getAttribute("color") == document.getElementsByClassName("colors")[0].value) {
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`No es de color: ${document.getElementsByClassName("colors")[0].value}`;
        document.getElementById("pistas").appendChild(texto);
    }
    document.getElementById(document.getElementsByClassName("colors")[0].value).remove();
}

function evaluarHabitats(){
    if (document.getElementsByClassName("habitats")[0].value == seleccion.getAttribute("habitat")){
        for (i = 0; i < 151; i++) {
            if (document.getElementsByClassName("pokemon")[i].getAttribute("habitat") != document.getElementsByClassName("habitats")[0].value) {
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`Su habitat es: ${document.getElementsByClassName("habitats")[0].value}`;
        document.getElementById("pistas").appendChild(texto);
    }else{
        for (i = 0; i < 151; i++) {
            if (document.getElementsByClassName("pokemon")[i].getAttribute("habitat") == document.getElementsByClassName("habitats")[0].value) {
                document.getElementsByClassName("pokemon")[i].src="pokibol.PNG";
                document.getElementsByClassName("pokemon")[i].style.animation="guardar 2s";
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseover", mostrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mouseout", borrarDatos);
                document.getElementsByClassName("contenedorPokemon")[i].removeEventListener("mousemove", moverDatos);
                document.getElementsByClassName("contenedorPokemon")[i].children[0].setAttribute("draggable","false");
            }
        }
        texto=document.createElement("p");
        texto.innerHTML=`Su habitat no es: ${document.getElementsByClassName("habitats")[0].value}`;
        document.getElementById("pistas").appendChild(texto);
    }
    document.getElementById(document.getElementsByClassName("habitats")[0].value).remove();
}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    sessionStorage.setItem("respuestaSRC", ev.target.parentNode.id);
}

