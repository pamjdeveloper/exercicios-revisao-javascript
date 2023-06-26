const executar = function () {
    let checar = false;

    if (checar == false) {
        let inicioDaExecucao = setInterval(function() {inicio()}, 1000);
        let contador = 10;

        function inicio() {
            executandoSomDoBip();
            document.getElementById("time").innerHTML = contador;
            if (contador == 0) {
                clearInterval(inicioDaExecucao);
                executarSomDoTrovao();
                document.getElementById("fire").src = "../../assets/gifs/explosion.gif";
                document.getElementById("time").innerHTML = "Fim de Jogo";
            }
            contador --;
        };
        
        checar = true;

        setTimeout(function() {fim()}, 18000);
    }
};

const executarSomDoTrovao = function () {
    let bipTrovao = new Audio();
    bipTrovao.src = "../../assets/sons/Thunder_Crack.mp3";
    bipTrovao.play();
};

const executandoSomDoBip = function () {
    let bip = new Audio();
    bip.src = "../../assets/sons/Beep_Short.mp3";
    bip.play(); 
};

const fim = function () {
    document.getElementById("fire").src = "../../assets/imagens/clean.png";
    window.location.reload();
};