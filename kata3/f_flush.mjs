import {Flush} from './flush.mjs';
import {rellenaPalo} from './f_rellenapalo.mjs';
import {highCard} from './f_highcard.mjs';
export function flush(jugador1, jugador2) {
    let j1 = new Array();
    let j2 = new Array();
    let winner = -1;

    j1 = rellenaPalo(jugador1);
    j2 = rellenaPalo(jugador2);

    let flushj1 = new Flush(j1);
    let flushj2 = new Flush(j2);
    let val1 = flushj1.calcFlush();
    let val2 = flushj2.calcFlush();

    if (val1 == val2 && (val1 != 0 && val2 != 0)) {
        winner = highCard(jugador1, jugador2);
    } else if (val1 == 1) {
        // console.log("Color - Gana Jugador 1");
        winner = 1;
    } else if (val2 == 1) {
        // console.log("Color - Gana Jugador 2");
        winner = 2;
    } else {
        // console.log("No hay Color");
    }
    return winner;

}