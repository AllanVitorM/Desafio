const letraprompt = require('prompt-sync')();

function LetraA(str) {
  const txt = str.toLowerCase();
  const qtd = (txt.match(/a/g) || []).length;
  return qtd;
}

function BuscarLetraA() {
  const text = letraprompt("Digite seu texto:\n");

  const quant = LetraA(text);

  if(quant > 0 ) {
    console.log(`A letra 'a' aparece ${quant} vezes`);
  }
  else {
    console.log('A letra "a" não aparece no texto');
  }
}

BuscarLetraA();