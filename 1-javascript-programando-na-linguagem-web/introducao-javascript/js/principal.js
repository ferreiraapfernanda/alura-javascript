var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Dados da página
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(calculaImc);

function calculaImc(paciente, index, array) {
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
        var imc = peso / (altura * altura);
        imc = imc.toFixed(2);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = mensagem;
        paciente.classList.add("paciente-invalido");
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    // Seleciona o formulário
    var form = document.querySelector('#form-adiciona');

    // Pega os dados do form
    var nome = form.nome.value;
    var peso = form.nome.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var novoPaciente = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    novoPaciente.classList.add("paciente");
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    novoPaciente.appendChild(nomeTd);
    novoPaciente.appendChild(pesoTd);
    novoPaciente.appendChild(alturaTd);
    novoPaciente.appendChild(gorduraTd);
    novoPaciente.appendChild(imcTd);

    document.querySelector("#tabela-pacientes").appendChild(novoPaciente);


})