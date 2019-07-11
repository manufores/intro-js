let num=0;
let result;

// function divNum(num) {
//     let evaluate = false;
//     let aux = num;
//     aux = aux.toString();
//     let myArray = [aux.charAt(0), aux.charAt(1)];
//     for (let i = 0; i < myArray.length; i++) {
//         switch (num) {
//             case (num % 3 === 0 && evaluate==false):
//                 result += "Foo";
//                 evaluate=true;
//                 break;
//             case (num % 5 === 0 && evaluate==true):
//                 result += "Bar";
//                 evaluate=true;
//                 break;
//             case (num % 7 === 0):
//                 result += "Quix";
//                 evaluate=true;
//                 break;
//             default:
//                 result += "";
//         }
//     }
// }

function div3(num) {

    if (num % 3 === 0) {
        return result = "Foo";
    }
    else{
        return result = "";
    }
}
function div5(num){
    if (num % 5 === 0) {
        return result = "Bar";
    }
    else{
        return result = "";
    }
}
    
function div7(num){
    if (num % 7 === 0) {
        return result = "Quix";
    }
    else{
        return result = "";
    }
}


function porDigito(num) {
    result="";
    let aux = num;
    aux = aux.toString();
    let myArray = [aux.charAt(0), aux.charAt(1)];
    for (let i = 0; i < myArray.length; i++) {
        switch (myArray[i]) {
            case "3":
                result += "Foo";
                break;
            case "5":
                result += "Bar";
                break;
            case "7":
                result += "Quix";
                break;
            default:
                result +="";
        }

    }
    return result;
}

function noDiv (num){
    if ((div3(num) == "") && (div5(num) == "") && (div7(num) == "") && (porDigito(num) == "")){
        return num;      
    }
    else{
        return result="";
    }
}


function fbq(num){
    if (num>0 && num<=100){
    console.log(div3(num)+div5(num)+div7(num)+porDigito(num)+noDiv(num));
    }
    else{
        console.log("El número debe estar entre 1 y 100");
    }
}

fbq(75);