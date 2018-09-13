var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Dados da página
var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var tdImc = paciente.querySelector(".info-imc");

// Validação
var pesoValido = true;
var alturaValida = true;

var mensagem = "";

if(peso <= 0 || peso > 1000){
    pesoValido = false;
    mensagem = "Peso inválido";
}
if(altura <= 0 || altura >= 3){
    alturaValida = false;
    mensagem = "Altura inválida";
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
    console.log(imc);
}else{
    tdImc.textContent = mensagem;
}