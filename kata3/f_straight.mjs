import { highCard } from './f_highcard.mjs';
import { rellenavalor } from './f_rellenavalor.mjs';
import { Straight } from './straight.mjs';
export function straight(jugador1, jugador2) {
    let winner = -1;
    
    
    let j1 = new Array();
    let j2 = new Array();

    j1 = rellenavalor(jugador1);
    j2 = rellenavalor(jugador2);


    let pairj1 = new Straight(j1);
    let pairj2 = new Straight(j2);

    let val1 = 0;
    val1 = pairj1.calcStraight();
    let val2 = 0;
    val2 = pairj2.calcStraight();

    if (val1 == val2 && (val1 != 0 && val2 != 0)) {
        // highCard(jugador1, jugador2);
        winner = highCard(jugador1, jugador2);
    } else if (val1 == 5) {
        // console.log("Escalera - Gana Jugador 1");
        winner = 1;
    } else if (val2 == 5) {
        // console.log("Escalera - Gana Jugador 2");
        winner = 2;
    } else {
        // console.log("No hay Escalera");
    }
    return winner;
}