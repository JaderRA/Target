function pegaDias(){    
    let objeto = require('./dados.json');
    return objeto;
}

function calculaMinMax(objeto){
    let valores = [];
    for (let i=0; i<objeto.length; i++){
        valores[i] = objeto[i].valor; 
    }
    let min = Math.min(...valores);
    let max = Math.max(...valores);
    
    console.log(`O menor valor é ${min} e acontece no dia ${valores.indexOf(min)+1}`);
    console.log(`O maior valor é ${max} e acontece no dia ${valores.indexOf(max)+1}`);

    return valores;
}

function calculaMedia(){
    let objeto = pegaDias();
    let valores = calculaMinMax(objeto);
    let qtdeDias = 0;
    
    //calcula quantidade de dias
    for (let i=0; i<valores.length; i++){
        if (valores[i] != 0){
            qtdeDias += 1;
        }
    }
    //calcula média
    let sum = valores.reduce((x, y) => x+y);
    let media = sum/qtdeDias
    
    //calcula quantidade de dias abaixo da média
    let diasAcima = 0;
    for (let n=0; n<valores.length; n++){
        if (valores[n] > media){
            diasAcima +=1;
        }
    }
    console.log(`Foram  ${diasAcima} dias com valores acima da média`);
}

calculaMedia();


