var segundos = 00;
var minutos = 00;
var horas = 00;
var tempo;

var timer = document.querySelector('.timer');
var iniciar = document.querySelector('.iniciar')
var pause = document.querySelector('.pausar');
var parar = document.querySelector('.parar');

function contador() {
    segundos++;

    if (segundos == 60) {
        minutos++;
        segundos = 00;
    }

    if (minutos == 60) {
        horas++;
        minutos = 00;
        segundos = 00;
    }
 
    timer.innerText = horas + ":" + minutos + ":" + segundos;

}

function iniciaCont() {
    tempo = setInterval(contador, 1000);

    document.getElementById("clock").style.color = '#000000';
}

function pausaCont() {
    clearInterval(tempo);

    document.getElementById("clock").style.color = '#FF0000';
}


function zeraCont() {
    clearInterval(tempo);

    segundos = 00;
    minutos = 00;
    horas = 00;
    
    timer.innerText = "00:00:00"

    document.getElementById("clock").style.color = '#000000';
}
