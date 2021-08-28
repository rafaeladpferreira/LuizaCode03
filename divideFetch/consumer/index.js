//escrever um programa que consome a api, recebe os valores e calcula x/y e retorna o resultado :)
// GET http://localhost:6000/numbers

const fetch = require("node-fetch");

const process = async () => {

    const responseX = await fetch("http://localhost:6000/getx")
        .then(res => res.json())

    const responseY = await fetch("http://localhost:6000/gety")
        .then(res => {

            if (res.status === 500) throw "Y não existe"
            return res.json()


        }).catch((err) => {
            console.log("Erro", err)
            return {}
        })

    console.log(`Resposta de X ${responseX.x}`)
    console.log(`Resposta de Y ${responseY.y}`)

    try { //tratando se x for undefined
        if (responseX.x == undefined) throw "X é undefined"

        //tratando se y for undefined
        if (responseY.y == undefined) throw "Y é undefined"
        if (responseY.y === 0) throw "impossível dividir por zero 0"

        // divisao
        console.log(`Resultado da divisão ${responseX.x / responseY.y}`)
    }

    catch (err) {
        console.log(err)
    }
}

process()
