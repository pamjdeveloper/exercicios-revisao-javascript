const ligaDesliga = document.getElementById("ligaDesliga");
const lampada = document.getElementById("lampada");

function lampadaEstaLigada() {
    return lampada.src.indexOf("quebrada") > -1;
}

function lampadaLigada() {
    if (!lampadaEstaLigada()) {
        lampada.src = "../../assets/imagens/ligada.jpg";
    }
}

function lampadaDesligada() {
    if (!lampadaEstaLigada()) {
        lampada.src = "../../assets/imagens/desligada.jpg";
        ligaDesliga.textContent = "Ligar";
    }
}

function lampadaQuebrada() {
    lampada.src = "../../assets/imagens/quebrada.jpg";
}

function lampadaEstaDesligada() {
    if (ligaDesliga.textContent === "Ligar") {
        lampadaLigada();
        ligaDesliga.textContent = "Desligar";
    }else {
        lampadaDesligada();
        ligaDesliga.textContent = "Ligar";
    }
}

ligaDesliga.addEventListener("click", lampadaEstaDesligada);
lampada.addEventListener("mouseover", lampadaLigada);
lampada.addEventListener("mouseleave", lampadaDesligada);
lampada.addEventListener("dblclick", lampadaQuebrada);