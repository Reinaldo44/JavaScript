function calculadoraFront(){
     const operacao = prompt('Escolha uma operação:\n 1 - Adição: (+)\n 2 - Subtração: (-)\n 3 - Divisão Real: (/)\n 4 - Divisão Inteira (%) \n 5 - Resto \n 6 - Multiplicação: (*)\n 7 - Potenciação: (**)');
     return operacao;
}

function calculadoraCalc(){

     let numero1 = Number(prompt('Insira o primeiro numero:'));
     let numero2 = Number(prompt('Insira o segundo numero:'));
     let resultado;

     function adicao(){
          resultado = numero1 + numero2;
          alert(`${numero1} + ${numero2} = ${resultado}`)
     }
     function subtracao(){
          resultado = numero1 - numero2;
          alert(`${numero1} - ${numero2} = ${resultado}`)
     }
     function divisaoReal(){
          resultado = numero1 / numero2;
          alert(`${numero1} / ${numero2} = ${resultado}`)
     }
     function divisaoInteira(){

          resultado = (numero1 - (numero1 % numero2))/numero2;
          alert(`${numero1} % ${numero2} = ${resultado}`)
     }
     function divisaoResto(){
          
          resultado = numero1 % numero2;
          alert(`${numero1} % ${numero2} = ${resultado}`)
     }
     function multiplicacao(){
          resultado = numero1 * numero2;
          alert(`${numero1} * ${numero2} = ${resultado}`)
     }
     function potenciacao(){
          resultado = numero1 ** numero2;
          alert(`${numero1} ** ${numero2} = ${resultado}`)
     }


      if(op == 1){
         adicao();
      }

      else if(op == 2){
          subtracao();
      }

      else if(op == 3){
          divisaoReal();
      }

      else if(op == 4){
          divisaoInteira();
      }

      else if(op == 5){
          divisaoResto();
      }

      else if(op == 6){
          multiplicacao();
      }

      else if(op == 7){
          potenciacao();
      }
}
function atualizaCalc(){

     var operacao = Number(prompt('Deseja fazer um novo calculo? \n 1 - Sim \n 2 - Não'));
     while(!operacao || operacao >= 3 || operacao != Number){
          alert('Opção inválida!')
          operacao = prompt('Deseja fazer um novo calculo? \n 1 - Sim \n 2 - Não');
     }
     return operacao;
}


var op = calculadoraFront();

if(!op || op >= 8){
     alert('Erro - Operação inválida')
     calculadoraFront();
  }
  else{

      calculadoraCalc(op);

      var operacaoVar = atualizaCalc();

      if(operacaoVar == 1){

           calculadoraFront(op)

      }
      else{
           alert('Obrigado')
      }

  }
