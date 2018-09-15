var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Dados da página
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(calculaImc);

for (var x = 0; x < pacientes.length; x++) {

    var paciente = pacientes[x];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    // Validação
    var pesoValido = true;
    var alturaValida = true;

    var mensagem = "";

    if (peso <= 0 || peso > 1000) {
        pesoValido = false;
        mensagem = "Peso inválido";
    }
    if (altura <= 0 || altura >= 3) {
        alturaValida = false;
        mensagem = "Altura inválida";
    }

    if (pesoValido && alturaValida) {
       var imc = calculaImc(peso, altura);
        tdImc.textContent =imc;
    } else {
        tdImc.textContent = mensagem;
        paciente.classList.add("paciente-invalido");
    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    return imc;
}