var frase = $(".frase").text();
var fraseSeparada = frase.split(" ");
var numPalavras = fraseSeparada.length;

$("#tamanho-frase").text(numPalavras);

