import {Carta} from './carta.mjs';
import {Mano} from './mano.mjs';
import {highCard} from './f_highcard.mjs';
import {pair} from './f_pair.mjs';
import {twoPairs} from './f_twopairs.mjs';
import {trio} from './f_trio.mjs';
import {straight} from './f_straight.mjs';
import {flush} from './f_flush.mjs';
import {fullHouse} from './f_fullhouse.mjs';
import {poker} from './f_poker.mjs';
import {strflush} from './f_strflush.mjs';

export const valores = {
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: "T",
    10: "J",
    11: "Q",
    12: "K",
    13: "A",
};
export const palo = ["S", "H", "C", "D"];

let carta = new Carta;
let baraja = new Array();
let h = 0;
for (let i = 1; i < 14; i++) {
    for (let j = 0; j < 4; j++) {
        carta = new Carta(valores[i], palo[j]);
        baraja[h] = carta.calcCarta();
        h++;
    }
}

let mano1 = new Mano(baraja);
let jugador1 = new Array();
let barajaAux = new Array();
barajaAux = baraja;
let mano2 = new Mano(barajaAux);


var removeItemFromArr = (arr, item) => {
    var g = arr.indexOf(item);
    g != -1 && arr.splice(g, 1);
}


for (let i = 0; i < 5; i++) {
    let item = jugador1[i];
    removeItemFromArr(barajaAux, item);
}

let jugador2 = new Array();
jugador1 = mano1.calcMano(); //Valores automáticos creados por un random
jugador2 = mano2.calcMano(); //Valores automáticos creados por un random
// jugador1 = ['TH', 'TH', 'JH', 'QH', 'KC']; //Valores para comprobación manual
// jugador2 = ['5C', '6C', '8C', 'TC', 'JH']; //Valores para comprobación manual
console.log("La mano del Jugador 1 es: " + jugador1);
console.log("La mano del Jugador 2 es: " + jugador2);


function principal(jugador1, jugador2) {
    if (strflush(jugador1, jugador2) != -1) {
        console.log("Straight flush - Gana el jugador: " + strflush(jugador1, jugador2));
    } else if (poker(jugador1, jugador2) != -1) {
        console.log("Poker - Gana Jugador: " + poker(jugador1, jugador2));
    } else if (fullHouse(jugador1, jugador2) != -1) {
        console.log("FullHouse - Gana Jugador: " + fullHouse(jugador1, jugador2));
    } else if (flush(jugador1, jugador2) != -1) {
        console.log("Color - Gana Jugador: " + flush(jugador1, jugador2));
    } else if (straight(jugador1, jugador2) != -1) {
        console.log("Escalera - Gana Jugador: " + straight(jugador1, jugador2));
    } else if (trio(jugador1, jugador2) != -1) {
        console.log("Trio - Gana Jugador: " + trio(jugador1, jugador2));
    } else if (twoPairs(jugador1, jugador2) != -1) {
        console.log("Doble Pareja - Gana Jugador: " + twoPairs(jugador1, jugador2));
    } else if (pair(jugador1, jugador2) != -1) {
        console.log("Pareja - Gana Jugador: " + pair(jugador1, jugador2));
    }else{
        console.log("Carta + Alta - Gana Jugador: " + highCard(jugador1, jugador2));
    }
}
principal(jugador1, jugador2)