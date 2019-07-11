let nromano = "";
let letraromana = "";
let narabe = 0;
let numar = 0;

function equival(letraromana) {
    let result = 0;
    if (letraromana == "I") {
        result = 1;
    } else if (letraromana == "V") {
        result = 5;
    } else if (letraromana == "X") {
        result = 10;
    } else if (letraromana == "L") {
        result = 50;
    } else if (letraromana == "C") {
        result = 100;
    } else if (letraromana == "D") {
        result = 500;
    } else if (letraromana == "M") {
        result = 1000;
    } else {
        // console.log("Este símbolo no pertence a los números romanos");
        result = 0;
    }
    return result;
}

function equival2(numar) {
    let result = 0;
    if (numar == 1) {
        result = "I";
    } else if (numar == 5) {
        result = "V";
    } else if (numar == 10) {
        result = "X";
    } else if (numar == 50) {
        result = "L";
    } else if (numar == 100) {
        result = "C";
    } else if (numar == 500) {
        result = "D";
    } else if (numar == 1000) {
        result = "M";
    }
    // else{
    //     console.log("equival 2 - Este símbolo no pertence a los números romanos");
    // }
    return result;
}

function operaciones(num1, pos) {
    let result2 = "";
    let aux = 1;
    // console.log("Posición "+pos);
    // console.log(num1);
    for (i = 1; i < pos; i++) {
        aux = aux * 10;
    }
    switch (num1 * aux) {
        case 4:
            result2 = "IV";
            break;
        case 40:
            result2 = "XL";
            break;
        case 400:
            result2 = "CD";
            break;
        case 9:
            result2 = "IX";
            break;
        case 90:
            result2 = "XC";
            break;
        case 900:
            result2 = "CM";
            break;
        case 6:
            result2 = "VI";
            break;
        case 60:
            result2 = "LX";
            break;
        case 600:
            result2 = "DC";
            break;
        case 7:
            result2 = "VII";
            break;
        case 70:
            result2 = "LXX";
            break;
        case 700:
            result2 = "DCC";
            break;
        case 8:
            result2 = "VIII";
            break;
        case 80:
            result2 = "LXXX";
            break;
        case 800:
            result2 = "DCCC";
            break;
        default:
            // console.log(equival2(aux*num1));
            if ((equival2(aux * num1)) == 0) {
                result2 = "";
                for (j = 0; j < num1; j++) {
                    result2 += equival2(aux);
                }

            } else {
                result2 = (equival2(aux * num1));
            }

    }


    return result2;


}

function romanToArab(nromano) {
    nromano = nromano.toUpperCase();
    let arab = 0;
    arrayRomano = new Array();
    valid = validator2(nromano);
    if (valid == true) {
        for (i = 0; i < nromano.length; i++) {
            arrayRomano[i] = nromano.charAt(i);
            if (i == 0) {
                arab = equival(arrayRomano[i]);
                // console.log(arab);
            } else if (equival(arrayRomano[i]) > equival(arrayRomano[i - 1])) {
                arab += equival(arrayRomano[i]) - 2 * (equival((arrayRomano[i - 1])));
                // console.log("segundo if " + arab);
            }
            else {
                arab += equival(arrayRomano[i]);
                // console.log("ultimo else " + arab);
            }
        }
        console.log("El número: " + nromano + " es igual a: " + arab);
    } else {
        console.log("No es un número Romano válido");
        console.log(nromano);
    }
}

function arabToRoman(narabe) {
    let roman = "";
    aux = narabe.toString();
    if (narabe > 3999) {
        console.log("No se pueden representar números romanos mayores de 3999");
    } else {
        for (h = 0; h < aux.length; h++) {
            pos = aux.length - h;
            // console.log(pos);
            // console.log(parseInt(aux[h]));
            roman += operaciones(parseInt(aux[h]), pos);
            // console.log("Debug " + roman);
        }
        console.log("El número: " + narabe + " es igual a: " + roman + " en números romanos");
    }
}

//NUEVO VALIDATOR

function validator2(nromano) {
    rep2 = 0;
    val2 = true;

    for (j = 0; j < nromano.length; j++) {
        if (nromano[j] != "I" && nromano[j] != "V" && nromano[j] != "X" && nromano[j] != "L" && nromano[j] != "C" && nromano[j] != "D" && nromano[j] != "M") {
            console.log("El número tiene algún símbolo que no pertenece a los números romanos");
            j = nromano.length;
            val2 = false;
        } else {

            switch (nromano[j]) {
                case "D":
                    if (equival(nromano[j - 1]) == 0 && equival(nromano[j + 1]) == 0) {
                        val2 = true;
                    } else if (nromano[j] == "D" && nromano[j + 1] == "D") {
                        val2 = false;
                        // console.log("1. " + nromano[j]);
                        j = nromano.length;
                    } else if (nromano[j - 1] == "C") {
                        val2 = true;
                    } else if ((j < nromano.length) && ((equival(nromano[j + 1]) > equival(nromano[j])) || ((equival(nromano[j - 1]) < 100) && (equival(nromano[j - 1])>0)))) {
                        val2 = false;
                        // console.log("2. " + nromano[j]);
                        j = nromano.length;
                    } else {
                        val2 = true;
                    }
                    break;
                case "C":
                    if (equival(nromano[j - 1]) == 0 && equival(nromano[j + 1]) == 0) {
                        val2 = true;
                    } else if (nromano[j - 1] == "X") {
                        val2 = true;
                    } else if ((equival(nromano[j - 1]) < 10) && (equival(nromano[j - 1]) > 0)) {
                        val2 = false;
                        j = nromano.length;
                    } else if (nromano[j] == "C" && (nromano[j + 1] == "D" || nromano[j + 1] == "M")) {
                        val2 = true;
                        console.log("5c. " + nromano[j]);
                    } else if (rep2 > 0 && (j < nromano.length) && (equival(nromano[j + 1]) > equival(nromano[j]))) {
                        val2 = false;
                        console.log("5a. " + nromano[j]);
                        j = nromano.length;
                    }
                    else {
                        val2 = true;
                        console.log("5e. " + nromano[j]);
                    }
                    break;
                case "L":
                    if (equival(nromano[j - 1]) == 0 && equival(nromano[j + 1]) == 0) {
                        val2 = true;
                    } else if (nromano[j] == "L" && nromano[j + 1] == "L") {
                        val2 = false;
                        // console.log("1. " + nromano[j]);
                        j = nromano.length;
                    } else if (nromano[j - 1] == "X") {
                        val2 = true;
                    } else if ((j < nromano.length) && ((equival(nromano[j + 1]) > equival(nromano[j])) || (equival(nromano[j - 1]) < equival(nromano[j]) && (equival(nromano[j - 1])>0))))
                    // else if (equival(nromano[j + 1]) > equival(nromano[j]))
                    {
                        val2 = false;
                        console.log("2. " + nromano[j]);
                        j = nromano.length;
                    }
                    break;
                case "X":
                    if (equival(nromano[j - 1]) == 0 && equival(nromano[j + 1]) == 0) {
                        val2 = true;
                    } else if (nromano[j - 1] == "I") {
                        val2 = true;
                    } else if ((equival(nromano[j - 1]) < equival(nromano[j])) && (equival(nromano[j - 1])>0)) {
                        val2 = false;
                        j = nromano.length;
                    } else if (nromano[j] == "X" && (nromano[j + 1] == "L" || nromano[j + 1] == "C")) {
                        val2 = true;
                    } else if (equival(nromano[j + 1] > equival(nromano[j]))) {
                        val2 = false;
                    }
                    else {
                        val2 = true;
                        // console.log("4e. " + nromano[j]);
                    }
                    break;
                case "V":
                    if (equival(nromano[j - 1]) == 0 && equival(nromano[j + 1]) == 0) {
                        val2 = true;
                    } else if (nromano[j] == "V" && nromano[j + 1] == "V") {
                        val2 = false;
                        j = nromano.length;
                        // console.log("1. " + nromano[j]);
                    } else if (nromano[j - 1] == "I") {
                        val2 = true;
                    }
                    if (equival(nromano[j + 1]) > equival(nromano[j])) {
                        val2 = false;
                        // console.log("2. " + nromano[j]);
                        j = nromano.length;
                    }
                    else {
                        val2 = true;
                        // console.log("3. " + nromano[j]);
                    }
                    break;

                case "I":
                    if (equival(nromano[j - 1]) == 0 && equival(nromano[j + 1]) == 0) {
                        val2 = true;
                    } else if (nromano[j] == "I" && (nromano[j + 1] == "V" || nromano[j + 1] == "X")) {
                        val2 = true;
                        // console.log("3c. " + nromano[j]);
                    }
                    else {
                        val2 = true;
                        // console.log("3e. " + nromano[j]);
                    }
                    break;
                default:
                    val2 = true;
                // console.log("7. " + nromano[j]);

            }
        }

        if (nromano[j] == nromano[j + 1]) {
            rep2++;
        }
        else if (rep2 > 2) {
            val2 = false;
            // console.log("6. " + nromano[j]);
            j = nromano.length;
        } else {
            rep2 = 0;
        }
        // console.log(rep2);
        // console.log("Valor de j: "+j);
    }
    // console.log(val2);
    return val2;
}

//FIN NUEVO VALIDATOR


romanToArab("MDCLXVI");
arabToRoman(3523);
// validator2("MMCMIXIII");

