import {valores} from './index.mjs';
export function sacavalor(card) {
    let vcard = card.charAt(0);
    let clavesPorValor = 0;
    Object.keys(valores).forEach(propiedad => {
        if (valores[propiedad] == vcard) {
            clavesPorValor = propiedad;
        }
    })
    return (parseInt(clavesPorValor));
}