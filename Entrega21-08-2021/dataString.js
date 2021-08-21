function formatarData(data) {// inicialização da func
    vetor = data.split("/") // split quebra a string em posições do vetor assim que encontra o carcter desejado 
    dia = vetor[0] // posição 0 contem 
    mes = vetor[1]
    ano = vetor[2]


    switch (parseInt(mes)) { // parseInt transforma uma "string"  ... em inteiro ex: "08" em 8
        case 1: // caso o mes seja 1
            mesExtenso = "Janeiro"
            break;
        case 2:
            mesExtenso = "Fevereiro"
            break;
        case 3:
            mesExtenso = "Março"
            break;
        case 4:
            mesExtenso = "Abril"
            break;
        case 5:
            mesExtenso = "Maio"
            break;
        case 6:
            mesExtenso = "Junho"
            break;
        case 7:
            mesExtenso = "Julho"
            break;
        case 8:
            mesExtenso = "Agosto"
            break;
        case 9:
            mesExtenso = "Setembro"
            break;
        case 10:
            mesExtenso = "Outubro"
            break;
        case 11:
            mesExtenso = "Novembro"
            break;
        case 12:
            mesExtenso = "Dezembro"
            break;
        default:
            console.log("ERRO escreva corretamente")

    }
    console.log(`${dia} de ${mesExtenso} de ${ano}`)
}

    data = "21/6/2021"
    formatarData(data)



