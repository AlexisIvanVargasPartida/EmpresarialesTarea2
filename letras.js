var palabra = 'Instituto Tecnologico';
var resultados = palindrome() + '\nPalabras Existentes: '
    + cantidadPalabras() + '\n Letras Existentes: ' +
    cantidadLetras() + '\n Vocales Existentes: ' + cantidadVocales() + '\n Consonantes Existentes: ' + cantidadConsonantes();


function asigna(pala) {
    palabra = pala;
    return resultados;
}

module.exports.asigna = asigna;




 function cantidadPalabras() {
    return palabra.trim().split(/\s+/).length;
}

 function cantidadLetras() {
    return palabra.replace(/[^a-zA-Z]/g, '').length;

}



 function cantidadVocales() {
    var m = palabra.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

 function cantidadConsonantes() {
    return palabra.split('').filter(e => e.match(/[^aeiou]/) != null).length;
}


 function palindrome() {

    /* remove special characters, spaces and make lowercase*/
    var removeChar = palabra.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if myString is a Palindrome*/
    if (removeChar === checkPalindrome) {

        return palabra + " Si es palindromo ";
    } else {

        return palabra + " No es palindromo ";
    }
}


module.exports.cantidadPalabras=cantidadPalabras;
module.exports.cantidadLetras=cantidadLetras;
module.exports.cantidadConsonantes=cantidadConsonantes;
module.exports.cantidadVocales=cantidadVocales;
module.exports.palindrome=palindrome;
