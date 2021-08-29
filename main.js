const $botones = document.querySelectorAll('button');
let $botonesBot = [];
let $botonesJugador;
let aciertos;
let ronda = 0;

function bloquearTurno(){
    $botones.forEach(function(boton){
        boton.disabled = true
    })
}

function desbloquearTurno(){
    $botones.forEach(function(boton){
        boton.disabled = false
    })
}

function empezarRondaBot(){
    ronda++
    bloquearTurno()
    $botonesJugador = []
    $botonesBot.push($botones[Math.floor(Math.random()* 4)])
        $botonesBot.forEach(function(boton, index){
            setTimeout(function(){
                cambiarColor(boton)
            }, (index + 1) * 1000)
    })
    setTimeout(function(){
        desbloquearTurno()
    }, (1300*ronda))
}


function test(e){
    aciertos = 0
    cambiarColor(e.target)   
    $botonesJugador.push(e.target)
    for (let i=0; i < $botonesJugador.length; i++){
        if (!($botonesBot[i] === $botonesJugador[i])){
            alert('Perdiste!')
            return
        }else{
            aciertos++
        }    
    } 
   if (aciertos === $botonesBot.length){
        empezarRondaBot()
   } 
}


function cambiarColor(boton){
    boton.classList.add('click')
    setTimeout(function(){boton.classList.remove('click')}, 300)
}


$botones.forEach(function(boton){
    boton.onclick = test
})

empezarRondaBot()

