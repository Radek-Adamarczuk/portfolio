let punktyGraczaSpan = document.querySelector(".punkty_gracza")
let punktyKomputeraSpan = document.querySelector(".punkty_komputera")
let opcjePrzyciskow = document.querySelectorAll(".opcja ")
let opcjeGracza = document.querySelector(".wybor_gracza")
let opcjeKomputera = document.querySelector(".wybor_komputera")
let wygrales = document.querySelector(".win")
let restart = document.querySelector(".zresetuj_gre")


let pktGracza = 0

let pktKomputera = 0
let opcjaKomputera = ""


if (!(localStorage["punkty_gracza"])) {
    localStorage["punkty_gracza"] = 0
}
else {
    pktGracza = Number(localStorage["punkty_gracza"])
}
if (!(localStorage["punkty_komputera"])) {
    localStorage["punkty_komputera"] = 0
}
else {
    pktKomputera = Number(localStorage["punkty_komputera"])
}



function setGame() {
    punktyGraczaSpan.innerHTML = pktGracza
    punktyKomputeraSpan.innerHTML = pktKomputera
    //restart.classList.remove("hidden")
}
setGame()

function zmien_wybor(element) {
    
    let lista = ["kamień" , "nożyczki", "papier"]

    let wygralem = {
        "kamień" : "nożyczki",
        "nożyczki" : "papier",
        "papier" : "kamień" 
    }
    
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    opcjeGracza.innerHTML = ""
    opcjeGracza.innerHTML = element.value
    
    opcjeKomputera.innerHTML = ""
    opcjeKomputera.innerHTML = lista[random(0, 2)]

    opcjaKomputera = opcjeKomputera.innerHTML

    if(opcjaKomputera == opcjeGracza.innerHTML){
        wygrales.style.backgroundColor = "gray"
        wygrales.innerHTML = "Remis"
    }
    else if(opcjaKomputera == wygralem[opcjeGracza.innerHTML]){
        wygrales.style.backgroundColor = "green"
        wygrales.innerHTML = "Wygrałeś"
        pktGracza += 1
        localStorage["punkty_gracza"] = pktGracza
        punktyGraczaSpan.innerHTML = pktGracza
    }
    else{
        wygrales.style.backgroundColor = "red"
        wygrales.innerHTML = "Przegrałeś"
        pktKomputera += 1
        localStorage["punkty_komputera"] = pktKomputera
        punktyKomputeraSpan.innerHTML = pktKomputera
    }
}
    function reset(){
    pktGracza = 0
    pktKomputera = 0
   punktyGraczaSpan.innerHTML = 0
    punktyKomputeraSpan.innerHTML = 0
    localStorage["punkty_komputera"] = 0
    localStorage["punkty_gracza"] = 0
}

