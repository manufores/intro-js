import {vtrio} from './f_vtrio.mjs';
import {trio} from './f_trio.mjs';
import {pair} from './f_pair.mjs';
import {vpair} from './f_vpair.mjs';
export function fullHouse(jugador1, jugador2) {
    let t1 = vtrio(jugador1);
    let p1 = vpair(jugador1);
    let t2 = vtrio(jugador2);
    let p2 = vpair(jugador2);
    let winner = -1;

    if ((vpair(jugador1) != 0 && vtrio(jugador1) != 0) && (vpair(jugador2) != 0 && vtrio(jugador2) != 0)) {
        t = trio(jugador1, jugador2);
        p = pair(jugador1, jugador2);
        if (t == p) {
            // console.log("FullHouse - Gana Jugador " + t);
            winner = t;
        } else if (t < p) {
            // console.log("FullHouse - Gana Jugador " + t);
            winner = t;
        } else if (t > p) {
            // console.log("FullHouse - Gana Jugador " + t);
            winner = t;
        }

    } else if ((vpair(jugador1) != 0 && vtrio(jugador1) != 0) || (vpair(jugador2) != 0 && vtrio(jugador2) != 0)) {
        if (t1 > 0 && p1 > 0) {
            winner = 1;
        } else if (t2 > 0 && p2 > 0) {
            winner = 2;
        }
    }
    // console.log(winner);
    return winner;
}