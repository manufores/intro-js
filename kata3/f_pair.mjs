import {highCard} from './f_highcard.mjs';
import {vpair} from './f_vpair.mjs';
export function pair(jugador1, jugador2) {
    let winner = -1;
    let val1 = vpair(jugador1);
    let val2 = vpair(jugador2);

    if (val1 > val2) {
        // console.log("Pareja - Gana Jugador 1");
        winner = 1;
    } else if (val1 < val2) {
        // console.log("Pareja - Gana Jugador 2");
        winner = 2;
    } else if (val1 == val2 && val1 != 0) {
        winner = highCard(jugador1, jugador2);
    } else {
        // console.log("No hay Pareja");
    }
    return winner;
}