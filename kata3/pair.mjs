export class Pair {
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