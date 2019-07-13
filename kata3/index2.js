let valores = {
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
let palo = ["S", "H", "C", "D"];

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
            // console.log(r);
        }
        var uniqs = indicesAux.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        });
        // console.log("EStos son los valores únicos => " + uniqs);


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
        // console.log(this._trioj);
        const repes = (this._pairj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});


        // console.log(Object.values(repes));
        let arrayAux = Object.values(repes);
        // console.log(arrayAux.indexOf(2));

        // console.log(repes);

        if (arrayAux.indexOf(2) != -1) {
            //   console.log(Object.values(repes)[]);
            //   console.log(Object.keys(repes)[arrayAux.indexOf(2)]);
            val = Object.keys(repes)[arrayAux.indexOf(2)];
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
        // console.log(this._trioj);
        const repes = (this._tpairj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});


        // console.log(Object.values(repes));
        let arrayAux = Object.values(repes);
        // console.log(arrayAux.indexOf(2));

        // console.log(repes);

        // console.log(arrayAux);

        if (arrayAux.indexOf(2) != -1) {
            for (i = 0; i < arrayAux.length; i++) {
                if (arrayAux[i] == 2) {
                    // console.log(arrayAux[i]);
                    count++;
                    valAux = Object.keys(repes)[arrayAux[i]];
                    // console.log("Valor de valAux: "+valAux);
                }
            }
            if (count > 1) {
                val = valAux;
            }
            //   console.log(Object.values(repes)[]);
            //   console.log(Object.keys(repes)[arrayAux.indexOf(2)]);

        }
        // console.log("Este es el valor de val: "+val);
        return val;

    }
}


class Trio {
    constructor(trioj) {
        this._trioj = trioj;
    }

    calcTrio() {
        let val = 0;
        // console.log(this._trioj);
        const repes = (this._trioj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});


        // console.log(Object.values(repes));
        let arrayAux = Object.values(repes);
        // console.log(arrayAux.indexOf(3));

        // console.log(repes);

        if (arrayAux.indexOf(3) != -1) {
            //   console.log(Object.values(repes)[ind]);
            //   console.log(Object.keys(repes)[arrayAux.indexOf(3)]);
            val = Object.keys(repes)[arrayAux.indexOf(3)];
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

        const repes = (this._strj).reduce((contador, valor) => {
            contador[valor] = (contador[valor] || 0) + 1;
            return contador;
        }, {});

        let arrayAux = Object.values(repes);

        
        if (arrayAux.length == this._strj.length) {
            for (i = 0; i < this._strj.length; i++) {
                if (j < this._strj.length - 1 && (this._strj[j] + 1) == this._strj[j + 1]) {
                    val = Object.keys(repes)[arrayAux[i]];
                }
            }
        }
        return val;
    }
}


let jugador = new Array();




let carta = new Carta;

let baraja = new Array();
let h = 0;
for (i = 1; i < 14; i++) {
    for (j = 0; j < 4; j++) {
        carta = new Carta(valores[i], palo[j]);
        baraja[h] = carta.calcCarta();
        h++;
        // console.log(carta._index);
    }
}

// console.log(baraja);

let mano1 = new Mano(baraja);
let jugador1 = new Array();
// jugador1 = mano1.calcMano();
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
    // console.log(item);
}
// console.log(barajaAux);

let jugador2 = new Array();
// jugador2 = mano2.calcMano();
jugador1 = ['7H', '8S', '9C', 'TH', 'JS'];
jugador2 = ['3C', '4H', '5S', '6C', '7H'];


// res=getRandomInt(1,52);

console.log(jugador1);
console.log(jugador2);
// console.log(res);

function sacavalor(card) {
    vcard = card.charAt(0);
    // console.log(vcard);
    let clavesPorValor = 0;
    Object.keys(valores).forEach(propiedad => {
        if (valores[propiedad] == vcard) {
            // clavesPorValor.push(propiedad);
            clavesPorValor = propiedad;
        }
    })
    // console.log(parseInt(clavesPorValor));
    return (parseInt(clavesPorValor));
}

// sacavalor("QS");


function highCard(jugador1, jugador2) {
    let long = jugador1.length - 1;

    for (let i = 0; i < jugador1.length; i++) {
        let valj1 = sacavalor(jugador1[long - i]);
        // console.log("Jugador 1: " + valj1);
        let valj2 = sacavalor(jugador2[long - i]);
        // console.log("Jugador 2: " + valj2);
        if (valj1 > valj2) {
            console.log("Gana Jugador 1");
            i = long + 1;
        } else if (valj1 < valj2) {
            console.log("Gana Jugador 2");
            i = long + 1;
        } else if (valj1 === valj2) {
            console.log("Empate");
        }

    }
}
// highCard(jugador1, jugador2);

function pair(jugador1, jugador2) {
    let j1 = new Array();
    let j2 = new Array();
    // let val1 = 0;
    // let val2 = 0;
    for (i = 0; i < jugador1.length; i++) {
        j1[i] = sacavalor(jugador1[i]);
        j2[i] = sacavalor(jugador2[i]);
    }

    let pairj1 = new Pair(j1);
    let pairj2 = new Pair(j2);
    // console.log(j1);
    // console.log(j2);

    let val1 = pairj1.calcPair();
    let val2 = pairj2.calcPair();

    if (val1 > val2) {
        console.log("Pareja - Gana Jugador 1");
    } else if (val1 < val2) {
        console.log("Pareja - Gana Jugador 2");
    } else if (val1 == val2) {
        highCard(jugador1, jugador2);
    } else {
        console.log("No hay Pareja");
    }
}

// pair(jugador1, jugador2);


function twoPairs(jugador1, jugador2) {
    let j1 = new Array();
    let j2 = new Array();
    // let val1 = 0;
    // let val2 = 0;
    for (i = 0; i < jugador1.length; i++) {
        j1[i] = sacavalor(jugador1[i]);
        j2[i] = sacavalor(jugador2[i]);
    }

    let pairj1 = new Twopairs(j1);
    let pairj2 = new Twopairs(j2);
    // console.log(j1);
    // console.log(j2);

    let val1 = pairj1.calcTpair();
    let val2 = pairj2.calcTpair();

    if (val1 > val2) {
        console.log("Doble Pareja - Gana Jugador 1");
    } else if (val1 < val2) {
        console.log("Doble Pareja - Gana Jugador 2");
    } else if (val1 == val2) {
        highCard(jugador1, jugador2);
    } else {
        console.log("No hay Doble Pareja");
    }
}

// twoPairs(jugador1, jugador2);

function trio(jugador1, jugador2) {
    let j1 = new Array();
    let j2 = new Array();
    // let val1 = 0;
    // let val2 = 0;
    for (i = 0; i < jugador1.length; i++) {
        j1[i] = sacavalor(jugador1[i]);
        j2[i] = sacavalor(jugador2[i]);
    }

    let trioj1 = new Trio(j1);
    let trioj2 = new Trio(j2);
    // console.log(j1);
    // console.log(j2);

    let val1 = trioj1.calcTrio();
    let val2 = trioj2.calcTrio();

    if (val1 > val2) {
        console.log("Trio - Gana Jugador 1");
    } else if (val1 < val2) {
        console.log("Trio - Gana Jugador 2");
    } else {
        console.log("No hay trio");
    }

}

// trio(jugador1, jugador2);

function straight(jugador1, jugador2) {
    let j1 = new Array();
    let j2 = new Array();
    // let val1 = 0;
    // let val2 = 0;
    for (i = 0; i < jugador1.length; i++) {
        j1[i] = sacavalor(jugador1[i]);
        j2[i] = sacavalor(jugador2[i]);
    }

    let pairj1 = new Straight(j1);
    let pairj2 = new Straight(j2);
    // console.log(j1);
    // console.log(j2);

    let val1 = pairj1.calcStraight();
    let val2 = pairj2.calcStraight();

    if (val1 == val2) {
        highCard(jugador1, jugador2);
    } else if (val1 == 5) {
        console.log("Escalera - Gana Jugador 1");
    } else if (val2 == 5) {
        console.log("Escalera - Gana Jugador 2");
    } else {
        console.log("No hay Escalera");
    }


}

straight(jugador1, jugador2);

function flush(jugador1, jugador2) {
    let count1 = 1;
    let count2 = 1;
    for (i = 0; i < jugador1.length; i++) {
        // console.log(jugador1[i].charAt(1));
        if (i < jugador1.length - 1 && jugador1[i].charAt(1) == jugador1[i + 1].charAt(1)) {
            count1++;
        }
    }
    // console.log(count1);
    for (i = 0; i < jugador2.length; i++) {
        if (i < jugador2.length - 1 && jugador2[i].charAt(1) == jugador2[i + 1].charAt(1)) {
            count2++;
        }
    }
    if (count1 == 5 && count2 == 5) {
        highCard(jugador1, jugador2);
    } else if (count1 == 5) {
        console.log("Color - Gana Jugador 1");
    } else if (count2 == 5) {
        console.log("Color - Gana Jugador 2");
    } else {
        console.log("No hay Color");
    }
}

// flush(jugador1, jugador2);



function fullHouse(jugador1, jugador2) {
    t = trio2(jugador1, jugador2);
    console.log(t);
    p = pair(jugador1, jugador2);
    console.log(p);
    if (t == p) {
        console.log("Full - Gana Jugador " + t);
    } else if (t < p) {
        console.log("Full - Gana Jugador " + t);
    } else if (t > p) {
        console.log("Full - Gana Jugador " + t);
    }
}

// fullHouse(jugador1, jugador2);