import {flush} from './f_flush.mjs';
import {straight} from './f_straight.mjs';

export function strflush(jugador1, jugador2) {
    let sff;
    let sfs;
    let winner = -1;
    sff = flush(jugador1, jugador2);
    // console.log(sff);
    sfs = straight(jugador1, jugador2);
    // console.log(sfs);
    if (sff != -1) {
        if (sfs == 1) {
            // console.log("Straight flush - Gana el jugador 1");
            winner = 1;
        } else if (sfs == 2) {
            // console.log("Straight flush - Gana el jugador 2");
            winner = 2;
        } else if (sfs == 0) {
            // console.log("Straight flush - Hay un empate");
            winner = 0;
        }
    }
    return winner;
}