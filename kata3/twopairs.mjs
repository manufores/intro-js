export class Twopairs {
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
            for (let i = 0; i < arrayAux.length; i++) {
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