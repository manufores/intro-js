export class Poker {
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