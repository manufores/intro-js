export class Trio {
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