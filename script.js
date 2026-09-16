
    

function calcularIMC() {

    let nome = document.getElementById("Nome").value;
    let peso = Number(document.getElementById("Peso").value);
    let altura = Number(document.getElementById("Altura").value);

    let imc = peso / (altura * altura);

    let resultado = document.getElementById("resultando");

    if (imc < 18.5) {
        resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)}. Abaixo do peso.`;

    } else if (imc < 25) {
        resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)}. Peso normal.`;

    } else if (imc < 30) {
        resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)}. Sobrepeso.`;

    } else {
        resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)}. Obesidade.`;
    }
}

document.getElementById("calcular").addEventListener("click", calcularIMC);