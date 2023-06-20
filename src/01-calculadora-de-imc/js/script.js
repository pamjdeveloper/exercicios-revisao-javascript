const calcular = document.getElementById("calcular");
const cancelar = document.getElementById("cancelar");

const calcularIMC = function () {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultadoDoIMC = document.getElementById("resultado");
    
    const calculoDoIMC = (peso / (altura * altura)).toFixed(2);

    let classificacaoDoIMC = "";
    
    if (nome !== "" && altura !== "" && peso !== "") {

        if (calculoDoIMC < 18.5){
            classificacaoDoIMC = 'abaixo do peso.';
        }else if (calculoDoIMC < 25){
            classificacaoDoIMC = 'com peso ideal, parabéns!';
        }else if (calculoDoIMC < 30){
            classificacaoDoIMC = 'um pouco acima do peso.';
        }else if (calculoDoIMC < 35){
            classificacaoDoIMC = 'com obesidade grau I.';
        }else if (calculoDoIMC < 40) {
            classificacaoDoIMC = 'com obesidade grau II.';
        }else {
            classificacaoDoIMC = 'com obesidade grau III, cuidado!';
        }
        resultadoDoIMC.textContent = `${nome} seu IMC é ${calculoDoIMC} e você está ${classificacaoDoIMC}`;
    }else {
        resultadoDoIMC.textContent = `Preencha todos os campos!`;
    }
}

const limparCampos = function () {
    window.location.reload();
}

calcular.addEventListener("click", calcularIMC);
cancelar.addEventListener("click", limparCampos);