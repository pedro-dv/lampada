var img = document.querySelector('#img')
var btnOFF = document.querySelector('#btn-desligar')
var btnON = document.querySelector('#btn-ligar')


// function (ligar lampada)
function ligarlamp () {
    
    if (! estaquebrada()){
        img.src = './img/ligada.jpg'
    }
}
btnON.addEventListener('click', ligarlamp)




// function (desligar lampada)
function desligarlamp (){
    
    if (! estaquebrada()){
        img.src = './img/desligada.jpg'
    }
}
btnOFF.addEventListener('click', desligarlamp)




// passar mouse por cima
img.addEventListener('mouseover', ligarlamp)
img.addEventListener('mouseleave', desligarlamp)




// function quebrar lampada
function quebrarlamp(){
    img.src = './img/quebrada.jpg'
}
img.addEventListener('dblclick', quebrarlamp)



// function lampada ja quebrada
function estaquebrada(){
   return img.src.indexOf('quebrada') > -1
}
