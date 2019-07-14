export class Straight {
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
        // console.log(arrayAux);

        if (arrayAux.length == this._strj.length) {
            for (let i = 0; i < this._strj.length; i++) {
                if ((j < arrayAux.length - 1) && (this._strj[i] + 1) === (this._strj[i + 1])) {
                    j++;
                }
            }
            if (j == 4) {
                val = 5;
            } else {
                val = 0;
            }
        }
        return val;
    }

}