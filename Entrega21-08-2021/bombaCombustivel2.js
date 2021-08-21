//caracteristicas / atributos
// acoes / metodos

class bombaCombustivel {
    //atributos
    constructor(valorGasolina, capacidade, qtdGasolina){
        this.valorGasolina = valorGasolina
        this.capacidade = capacidade
        this.qtdGasolina = qtdGasolina
    }

    //metodos
    encherBomba(){
        if (this.qtdGasolina = this.capacidade){
            console.log("Bomba cheia")
        }else{
            this.qtdGasolina = this.capacidade
            console.log("Enchendo a bomba...")
        }

    }

    abastecerCarro(litros){
        if (this.qtdGasolina >= litros) {
            this.qtdGasolina -= litros
            console.log(`Abastecido com sucesso, e você vai pagar ${litros*this.valorGasolina} `)
        }else {
            console.log(`Não temos esta quantidade de gasolina, só temos ${this.qtdGasolina}`)
        }

    }

    ajustarValor(novoValor){
        if(novoValor > 0 && typeof(novoValor) == 'number'){
        this.valorGasolina = novoValor;
        } else {
            console.log("Valor não permitido!")
        }
    }
}


const bomba1 = new bombaCombustivel(10,200, 190)

//console.log(bomba1.valorGasolina)

//bomba1.ajustarValor(-2)
//console.log(bomba1.valorGasolina)

//bomba1.encherBomba()

bomba1.abastecerCarro(20)
bomba1.ajustarValor(5)
bomba1.abastecerCarro(20)
bomba1.abastecerCarro(180)
bomba1.encherBomba()
bomba1.abastecerCarro(20)

