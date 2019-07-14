const valores = {
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
const palo = ["S", "H", "C", "D"];

class Carta {
    constructor(valor, palo) {
        this._valor = valor;
        this._palo = palo;
    }
    calcCarta() {
        return this._valor + this._palo;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


class Mano {
    constructor(baraja) {
        this._baraja = baraja;
    }
    calcMano() {
        let manos = new Array();
        let min = 0;
        let max = baraja.length;
        let indices = new Array();
        let indicesAux = new Array();

        for (i = 0; i < 11; i++) {
            let r = getRandomInt(min, max);
            indicesAux[i] = r;
        }
        var uniqs = indicesAux.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        });

        for (i = 0; i < 5; i++) {
            indices[i] = uniqs[i];
        }

        indices.sort(function deMenorAMayor(elem1, elem2) { return elem1 - elem2; });
        for (j = 0; j < indices.length; j++) {
            let s = indices[j];
            manos[j] = this._baraja[s];
        }
        return manos;
    }
}

class Pair {
    constructor(pairj) {
        this._pairj = pairj;
    }

    calcPair() {
        let val = 0;
        const repes = (this._pairj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});

        let arrayAux = Object.values(repes);

        if (arrayAux.indexOf(2) != -1) {
            val = parseInt(Object.keys(repes)[arrayAux.indexOf(2)]);
        }
        return val;
    }
}

class Twopairs {
    constructor(tpairj) {
        this._tpairj = tpairj;
    }

    calcTpair() {
        let val = 0;
        let valAux = 0;
        let count = 0;
        const repes = (this._tpairj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});
        let arrayAux = Object.values(repes);
        if (arrayAux.indexOf(2) != -1) {
            for (i = 0; i < arrayAux.length; i++) {
                if (arrayAux[i] == 2) {
                    count++;
                    valAux = Object.keys(repes)[arrayAux[count]];
                }
            }
            if (count > 1) {
                val = parseInt(valAux);
            }
        }
        return val;
    }
}


class Trio {
    constructor(trioj) {
        this._trioj = trioj;
    }

    calcTrio() {
        let val = 0;
        const repes = (this._trioj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});
        let arrayAux = Object.values(repes);
        if (arrayAux.indexOf(3) != -1) {
            val = parseInt(Object.keys(repes)[arrayAux.indexOf(3)]);
        }
        return val;
    }
}

class Straight {
    constructor(strj) {
        this._strj = strj;
    }

    calcStraight() {
        let val = 0;
        let j = 0;

        const repes = (this._strj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});

        let arrayAux = Object.values(repes);

        if (arrayAux.length == this._strj.length) {
            for (i = 0; i < this._strj.length; i++) {
                if (j < this._strj.length - 1 && (this._strj[j] + 1) == (this._strj[j + 1])) {
                    val = parseInt(Object.keys(repes)[arrayAux[i]]);
                    j++;
                } else {
                    val = 0;
                }
            }
        }
        return val;
    }
}

class Flush {
    constructor(flushj) {
        this._flushj = flushj;
    }

    calcFlush() {
        let val = 0;
        const repes = (this._flushj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});



        let arrayAux = Object.values(repes);

        if (arrayAux.length == 1) {
            val = 1;
        }
        return val;
    }
}

class Poker {
    constructor(pokerj) {
        this._pokerj = pokerj;
    }

    calcPoker() {
        let val = 0;
        const repes = (this._pokerj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});
        let arrayAux = Object.values(repes);
        if (arrayAux.indexOf(4) != -1) {
            val = parseInt(Object.keys(repes)[arrayAux.indexOf(4)]);
        }
        return val;
    }
}



// let jugador = new Array();
// let carta = new Carta;
let baraja = new Array();
let h = 0;
for (i = 1; i < 14; i++) {
    for (j = 0; j < 4; j++) {
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


for (i = 0; i < 5; i++) {
    let item = jugador1[i];
    removeItemFromArr(barajaAux, item);
}

let jugador2 = new Array();
jugador1 = mano1.calcMano();
jugador2 = mano2.calcMano();
// jugador1 = ['5H', '7H', '8H', 'JH', 'KC'];
// jugador2 = ['5C', '6C', '8C', 'TC', 'JH'];
console.log("La mano del Jugador 1 es: " + jugador1);
console.log("La mano del Jugador 2 es: " + jugador2);

function sacavalor(card) {
    vcard = card.charAt(0);
    let clavesPorValor = 0;
    Object.keys(valores).forEach(propiedad => {
        if (valores[propiedad] == vcard) {
            clavesPorValor = propiedad;
        }
    })
    return (parseInt(clavesPorValor));
}

function rellenavalor(jugador) {
    let arrayValores = new Array();
    for (i = 0; i < jugador.length; i++) {
        arrayValores[i] = sacavalor(jugador[i]);
    }
    return arrayValores;
}

//Empezamos con las jugadas.

function highCard(jugador1, jugador2) {
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

function vpair(jugador) {
    let j = new Array();
    j = rellenavalor(jugador);
    let pairj = new Pair(j);
    let val = pairj.calcPair();
    return val;
}

function pair(jugador1, jugador2) {
    let winner = -1;
    val1 = vpair(jugador1);
    val2 = vpair(jugador2);

    if (val1 > val2) {
        // console.log("Pareja - Gana Jugador 1");
        winner = 1;
    } else if (val1 < val2) {
        // console.log("Pareja - Gana Jugador 2");
        winner = 2;
    } else if (val1 == val2 && val1 != 0) {
        winner = highCard(jugador1, jugador2);
    } else {
        // console.log("No hay Pareja");
    }
    return winner;
}

// pair(jugador1, jugador2);

function twoPairs(jugador1, jugador2) {
    let winner = -1;
    let j1 = new Array();
    let j2 = new Array();

    j1 = rellenavalor(jugador1);
    j2 = rellenavalor(jugador2);

    let pairj1 = new Twopairs(j1);
    let pairj2 = new Twopairs(j2);

    let val1 = pairj1.calcTpair();
    let val2 = pairj2.calcTpair();

    if (val1 > val2) {
        // console.log("Doble Pareja - Gana Jugador 1");
        winner = 1;
    } else if (val1 < val2) {
        // console.log("Doble Pareja - Gana Jugador 2");
        winner = 2;
    } else if (val1 == val2 && val1 != 0) {
        winner = highCard(jugador1, jugador2);
    } else {
        // console.log("No hay Doble Pareja");
    }
    return winner;
}

// twoPairs(jugador1, jugador2);

function vtrio(jugador) {
    let j = new Array();
    j = rellenavalor(jugador);
    let trioj = new Trio(j);
    let val = trioj.calcTrio();
    return val;
}

function trio(jugador1, jugador2) {
    let winner = -1;

    val1 = vtrio(jugador1);
    val2 = vtrio(jugador2);

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

// trio(jugador1, jugador2);

function straight(jugador1, jugador2) {
    let winner = -1;
    let j1 = new Array();
    let j2 = new Array();

    j1 = rellenavalor(jugador1);
    j2 = rellenavalor(jugador2);


    let pairj1 = new Straight(j1);
    let pairj2 = new Straight(j2);

    let val1 = pairj1.calcStraight();
    let val2 = pairj2.calcStraight();

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

// straight(jugador1, jugador2);

function rellenaPalo(jugador) {
    let arrayPalos = new Array();
    for (i = 0; i < jugador.length; i++) {
        arrayPalos[i] = jugador[i].charAt(1);
    }
    return arrayPalos;
    // console.log(arrayPalos);
}

// rellenaPalo(jugador1);
// rellenaPalo(jugador2);

function flush(jugador1, jugador2) {
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

// flush(jugador1, jugador2);



function fullHouse(jugador1, jugador2) {
    t1 = vtrio(jugador1);
    p1 = vpair(jugador1);
    t2 = vtrio(jugador2);
    p2 = vpair(jugador2);
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

// fullHouse(jugador1, jugador2);

function poker(jugador1, jugador2) {
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

// poker(jugador1, jugador2);

function strflush(jugador1, jugador2) {
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

// strflush(jugador1, jugador2);

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