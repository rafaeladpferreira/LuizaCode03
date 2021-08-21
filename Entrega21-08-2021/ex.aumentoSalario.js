
// As Organizações Tabajara resolveram dar um aumento de salário aos seus
// colaboradores e lhe contrataram para desenvolver o programa que calculará os
// reajustes. Faça um programa que recebe o salário de um colaborador e calcule
// reajuste segundo o seguinte critério, baseado no salário atual:
//  Salários até R$ 280,00 (incluindo): aumento de 20%
//  Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
//  Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
//  Salários de R$ 1500,00 em diante: aumento de 5%
// Após o aumento ser calculado, deverá ser informado: o salário antes do
// reajuste; o percentual de aumento aplicado; o valor do aumento; o novo
// salário, após o aumento.

function aumentoSalarial(salario) {
    

    if (salario <= 280) {
        porcentagem = "20%"
        aumento = salario * 0.20
    } else if (salario > 280 && salario <= 700) {
        porcentagem = "15%"
        aumento = salario * 0.15
    } else if (salario > 700 && salario <= 1500) {
        porcentagem = "10%"
        aumento = salario * 0.10
    }else {
        porcentagem = "5%"
        aumento = salario * 0.05
    }

    salarioNovo = salario + aumento

    console.log(`salario antigo: ${salario}.
                \n Porcentagem do aumento: ${porcentagem}.
                \n Aumento: ${aumento}.
                \n Salario Novo: ${salarioNovo}.`)

}

aumentoSalarial(750) 



