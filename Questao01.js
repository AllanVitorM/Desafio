function gerarCalculo(max){
    let calc = [0, 1];
  
    while (true) {
        let numProximo = calc[calc.length - 1] + calc[calc.length - 2];  
        if (numProximo > max){
            break
        }
        calc.push(numProximo);
    }
    return calc;
  }
  
  function calcP(num){
    if(num < 0) {
        return false;
    }
    let Fibo = gerarCalculo(num)
    return Fibo.includes(num);
  }
  
  function adicionarNum() {
    const numeroPrompt = require('prompt-sync')();
  
    let num = parseInt(numeroPrompt ('Digite um valor para verificar se pertence a sequência de Fibonacci'));
  
    if(calcP(num)) {
        console.log(`${num} pertence a sequência de Fibonacci`);
    }
    else {
        console.log(`${num} não pertence a sequência de Fibonacci`)
    }
  }
  
  adicionarNum(); 