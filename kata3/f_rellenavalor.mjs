import {sacavalor} from './f_sacavalor.mjs';
export function rellenavalor(jugador) {
    let arrayValores = new Array();
    for (let i = 0; i < jugador.length; i++) {
        arrayValores[i] = sacavalor(jugador[i]);
    }
    return arrayValores;
}