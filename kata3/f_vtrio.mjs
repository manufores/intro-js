import {Trio} from './trio.mjs';
import {rellenavalor} from './f_rellenavalor.mjs';
export function vtrio(jugador) {
    let j = new Array();
    j = rellenavalor(jugador);
    let trioj = new Trio(j);
    let val = trioj.calcTrio();
    return val;
}