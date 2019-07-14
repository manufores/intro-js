import {getRandomInt} from './getRandomInt.mjs';

export class Mano {
    constructor(baraja) {
        this._baraja = baraja;
    }

    
    calcMano() {
        let manos = new Array();
        let min = 0;
        let max = this._baraja.length;
        let indices = new Array();
        let indicesAux = new Array();

        
        for (let i = 0; i < 11; i++) {
            let r = getRandomInt(min, max);
            indicesAux[i] = r;
        }
        var uniqs = indicesAux.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        });

        for (let i = 0; i < 5; i++) {
            indices[i] = uniqs[i];
        }

        indices.sort(function deMenorAMayor(elem1, elem2) { return elem1 - elem2; });
        for (let j = 0; j < indices.length; j++) {
            let s = indices[j];
            manos[j] = this._baraja[s];
        }
        return manos;
    }
}