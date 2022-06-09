import Componente from "../interface/componente";
import DecoradorBase from "./decoradorBase";

export default class DecoradorConcreto extends DecoradorBase {
    private nome: string
    constructor(nome: string, componente: Componente) {
        super(componente);
        this.nome = nome
    }
    executar(): void {
        console.log(`Este é o decorador concreto: ${this.nome}`)
        this.componente.executar()
    }
}

