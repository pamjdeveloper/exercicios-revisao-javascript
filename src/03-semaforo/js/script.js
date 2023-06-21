const imagem = document.querySelector("#semaforo");
const resultado = document.querySelector("div#resultado");
const imagemSinalVerde = "../../assets/imagens/verde.png";
const imagemSinalAmarelo = "../../assets/imagens/amarelo.png";
const imagemSinalVermelho = "../../assets/imagens/vermelho.png";

function definindoSinalVermelho() {
    resultado.innerHTML = `<strong>PARE!</strong>`;
    resultado.style.color = "#FF0000";
}

function definindoSinalAmarelo() {
    resultado.innerHTML = `<strong>ATENÇÃO!</strong>`;
    resultado.style.color = "#FFC125";
}

function definindoSinalVerde() {
    resultado.innerHTML = `<strong>SIGA!</strong>`;
    resultado.style.color = "#00EE00";
}

function executandoSinalVerde() {
    imagem.src = imagemSinalVerde;
    setTimeout(() => {
        executandoSinalAmarelo();
        definindoSinalAmarelo();
    }, 5000);
}

function executandoSinalAmarelo() {
    imagem.src = imagemSinalAmarelo;
    setTimeout(() => {
        executandoSinalVermelho();
        definindoSinalVermelho();
    }, 3000);
}

function executandoSinalVermelho() {
    imagem.src = imagemSinalVermelho;
    definindoSinalVermelho();
    setTimeout(() => {
        executandoSinalVerde();
        definindoSinalVerde();
    }, 3000);
}

function desligarSemaforo() {
    window.location.reload();
}