export class Carta {
    constructor(valor, palo) {
        this._valor = valor;
        this._palo = palo;
    }
    calcCarta() {
        return this._valor + this._palo;
    }
}

