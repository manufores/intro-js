export function rellenaPalo(jugador) {
    let arrayPalos = new Array();
    for (let i = 0; i < jugador.length; i++) {
        arrayPalos[i] = jugador[i].charAt(1);
    }
    return arrayPalos;
    // console.log(arrayPalos);
}