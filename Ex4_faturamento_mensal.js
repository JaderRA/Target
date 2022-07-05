function calculaFaturamento(){
    let SP = 67836.43;
    let RJ = 36678.66;
    let MG = 29229.88;
    let ES = 27165.48;
    let Outros = 19849.53;
    let total = [SP, RJ, MG, ES, Outros];
    let estados = ["SP", "RJ", "MG", "ES", "Outros"];
    
    let faturamentoTotal = total.reduce((x, y) => x+y);
    
    for (let i=0; i<total.length; i++){
        let valor = Math.round((total[i]/faturamentoTotal)*100);
        console.log(`${estados[i]} faturou(raram) aproximadamente ${valor}% do faturamento total.`);
    }
}

calculaFaturamento();


