import {vtrio} from './f_vtrio.mjs';
export function trio(jugador1, jugador2) {
    let winner = -1;

    let val1 = vtrio(jugador1);
    let val2 = vtrio(jugador2);

    if (val1 > val2) {
        // console.log("Trio - Gana Jugador 1");
        winner = 1;
    } else if (val1 < val2) {
        // console.log("Trio - Gana Jugador 2");
        winner = 2;
    } else {
        // console.log("No hay trio");
    }
    return winner;
}