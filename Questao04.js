function calcElementos(){
    let LA = [1, 3, 5, 7];
    let proxnumA = LA[LA.length - 1] + 2;

    let LB = [2, 4, 8, 16, 32, 64];
    let proxnumB = LB[LB.length - 1] * 2;

    let LC = [0, 1 , 4, 9, 16, 25, 36];
    let proxnumC = Math.pow(Math.sqrt(LC[LC.length - 1]) + 1, 2);

    let LD = [0, 1 , 4, 9, 16, 25, 36];
    let proxnumD = Math.pow(Math.sqrt(LD[LD.length - 1]) + 2, 2);

    let LE = [1, 1, 2, 3, 5, 8];
    let proxnumE = LE[LE.length - 1] + LE[LE.length - 2];

    let LF = [2, 10, 12, 16, 17, 18, 19];
    let proxnumF = LF[LF.length - 1] + 1;

    console.log(`Próximo número em sequência da letra A é: ${proxnumA}`);
    console.log(`Próximo número em sequência da letra B é: ${proxnumB}`);
    console.log(`Próximo número em sequência da letra C é: ${proxnumC}`);
    console.log(`Próximo número em sequência da letra D é: ${proxnumD}`);
    console.log(`Próximo número em sequência da letra E é: ${proxnumE}`);
    console.log(`Próximo número em sequência da letra F é: ${proxnumF}`);
}

calcElementos();