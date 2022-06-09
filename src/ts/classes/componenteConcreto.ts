import Componente from "../interface/componente"

export default class ComponenteConcreto implements Componente {
    private nome: string
    constructor(nome: string) {
        this.nome = nome
    }
    executar(): void {
        console.log(`Este é o componente: ${this.nome}`)
    }
}

