const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

const jogar = function () {
  if (
    pedra.checked === false &&
    papel.checked === false &&
    tesoura.checked === false
  ) {
    alert("Selecione uma opção");
  } else {
    let sorteio = Math.floor(Math.random() * 3);

    switch (sorteio) {
      case 0:
        document.getElementById("pc").src = "../../assets/imagens/pcpedra.png";
        break;
      case 1:
        document.getElementById("pc").src = "../../assets/imagens/pcpapel.png";
        break;
      case 2:
        document.getElementById("pc").src =
          "../../assets/imagens/pctesoura.png";
        break;
    }

    resultado(sorteio);
  }
};

const resultado = function (sorteio) {
  if (
    (pedra.checked === true && sorteio === 0) ||
    (papel.checked === true && sorteio === 1) ||
    (tesoura.checked === true && sorteio === 2)
  ) {
    document.getElementById("placar").innerHTML = "Empate";
  } else if (
    (pedra.checked === true && sorteio === 2) ||
    (papel.checked === true && sorteio === 0) ||
    (tesoura.checked === true && sorteio === 1)
  ) {
    document.getElementById("placar").innerHTML = "Jogador Venceu";
  } else {
    document.getElementById("placar").innerHTML = "Computador Venceu";
  }
};

const reiniciar = function () {
  document.getElementById("pc").src = "../../assets/imagens/pc.png";
  document.getElementById("placar").innerHTML = "";
};
