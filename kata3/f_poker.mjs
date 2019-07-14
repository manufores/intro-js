import {rellenavalor} from './f_rellenavalor.mjs';
import {Poker} from './poker.mjs';

export function poker(jugador1, jugador2) {
    let winner = -1;
    let j1 = new Array();
    let j2 = new Array();

    j1 = rellenavalor(jugador1);
    j2 = rellenavalor(jugador2);

    let trioj1 = new Poker(j1);
    let trioj2 = new Poker(j2);

    let val1 = trioj1.calcPoker();
    let val2 = trioj2.calcPoker();

    if (val1 > val2) {
        // console.log("Poker - Gana Jugador 1");
        winner = 1;
    } else if (val1 < val2) {
        // console.log("Poker - Gana Jugador 2");
        winner = 2;
    } else {
        // console.log("No hay Poker");
    }
    return winner;
}