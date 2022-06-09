import Componente from "../interface/componente";

export default abstract class DecoradorBase implements Componente {
    protected componente: Componente
    constructor(componente: Componente) {
        this.componente = componente
    }
    abstract executar(): void
}

