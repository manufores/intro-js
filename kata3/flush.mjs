export class Flush {
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