import {Pair} from './pair.mjs';
import {rellenavalor} from './f_rellenavalor.mjs';
export function vpair(jugador) {
    let j = new Array();
    j = rellenavalor(jugador);
    let pairj = new Pair(j);
    let val = pairj.calcPair();
    return val;
}