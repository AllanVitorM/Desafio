function calculoSoma(INDICE) {
    let SOMA = 0;
    let K = 1;
  
    while(K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
    return SOMA;
  }
  
  const INDICE = 12;
  
  const result = calculoSoma(INDICE);
  console.log(`O valor do resultado de SOMA é: ${result}`);