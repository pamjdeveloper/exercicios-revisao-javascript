const jogar = document.getElementById("jogar");
const reiniciar = document.getElementById("reiniciar");

const jogarDado = function () {
    let sorteio = Math.floor(Math.random() * 6 + 1);

    setTimeout(() => {
        switch (sorteio) {
            case 1:
                document.getElementById("face").src = "../../assets/imagens/face1.png";
                break;
            case 2:
                document.getElementById("face").src = "../../assets/imagens/face2.png";
                break;
            case 3:
                document.getElementById("face").src = "../../assets/imagens/face3.png";
                break;
            case 4:
                document.getElementById("face").src = "../../assets/imagens/face4.png";
                break;
            case 5:
                document.getElementById("face").src = "../../assets/imagens/face5.png";
                break;
            case 6:
                document.getElementById("face").src = "../../assets/imagens/face6.png";
                break;
            default:
                break;
        }
    }, 500);
};

const reiniciarJogo = function () {
    location.reload();
}

jogar.addEventListener("click", jogarDado);
reiniciar.addEventListener("click", reiniciarJogo);