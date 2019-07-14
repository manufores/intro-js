import {Twopairs} from './twopairs.mjs';
import {rellenavalor} from './f_rellenavalor.mjs';
import {highCard} from './f_highcard.mjs';
export function twoPairs(jugador1, jugador2) {
    let winner = -1;
    let j1 = new Array();
    let j2 = new Array();

    j1 = rellenavalor(jugador1);
    j2 = rellenavalor(jugador2);

    let pairj1 = new Twopairs(j1);
    let pairj2 = new Twopairs(j2);

    let val1 = pairj1.calcTpair();
    let val2 = pairj2.calcTpair();

    if (val1 > val2) {
        // console.log("Doble Pareja - Gana Jugador 1");
        winner = 1;
    } else if (val1 < val2) {
        // console.log("Doble Pareja - Gana Jugador 2");
        winner = 2;
    } else if (val1 == val2 && val1 != 0) {
        winner = highCard(jugador1, jugador2);
    } else {
        // console.log("No hay Doble Pareja");
    }
    return winner;
}