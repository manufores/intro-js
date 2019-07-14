import {sacavalor} from './f_sacavalor.mjs';
export function highCard(jugador1, jugador2) {
    let long = jugador1.length - 1;
    let winner = -1;

    for (let i = 0; i < jugador1.length; i++) {
        let valj1 = sacavalor(jugador1[long - i]);
        let valj2 = sacavalor(jugador2[long - i]);
        if (valj1 > valj2) {
            // console.log("Carta + Alta - Gana Jugador 1");
            i = long + 1;
            winner = 1;
        } else if (valj1 < valj2) {
            // console.log("Carta + Alta - Gana Jugador 2");
            i = long + 1;
            winner = 2;
        } else if (valj1 === valj2) {
            // console.log("Carta + Alta - Empate");
            winner = 0;
        }

    }
    return winner;
}