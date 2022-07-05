function inverteString(string){
    let novaString = "";

    for (let i=string.length-1; i>=0; i--){
        novaString += string[i];
    }
    console.log(novaString);
    return novaString;
}

inverteString("Eu adoro programação!");