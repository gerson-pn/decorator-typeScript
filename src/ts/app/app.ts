import ComponenteConcreto from "../classes/componenteConcreto";
import DecoradorConcreto from "../classes/decoradorConcreto";

let objeto1 = new ComponenteConcreto('objeto 1')
let decorador1 = new DecoradorConcreto('decorador 1', objeto1)
let decorador2 = new DecoradorConcreto('decorador 2', decorador1)
let decorador3 = new DecoradorConcreto('decorador 3', decorador2)
let decorador4 = new DecoradorConcreto('decorador 4', decorador3)

decorador4.executar()