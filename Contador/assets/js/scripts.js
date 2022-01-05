var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var textoCor = document.querySelector('.textoContador')

function incrementT(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrementT(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function mudaCor(){
    
        document.getElementById('currentNumber').style.color = 'red';
     
}

function load() {
    var incrementV = document.getElementById("increment");
    incrementV.addEventListener("click", incrementT);

    var decrementV = document.getElementById("decrement");
    decrementV.addEventListener("click", decrementT)

    if(decrementV < 1){

    decrementV.addEventListener("click", "mudaCor")

    }
  }
  
  document.addEventListener("DOMContentLoaded", load);
