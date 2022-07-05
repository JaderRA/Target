function numeroSequencia(num){    
    let i = 0;
    let j = 2;
    let sequencia = [];
    let checagem = 0;

    while(i<=num){
        sequencia[0] = 0;
        sequencia[1] = 1;
        sequencia[j] = sequencia[j-2] + sequencia[j-1];
        if(sequencia[j] == num || num == 0){            
            console.log(`O número ${num} pertence à sequencia de Fibonacci.`);
            break;
        }
        i+=1;
        j+=1;
    }

}

numeroSequencia(2);