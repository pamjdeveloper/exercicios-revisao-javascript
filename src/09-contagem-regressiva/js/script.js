const formatarDigitos = (digito) => `0${digito}`.slice(-2);

const atualizar = function (tempo) {
    const segundos = document.getElementById("segundos");
    const minutos = document.getElementById("minutos");
    const horas = document.getElementById("horas");
    const dias = document.getElementById("dias");

    const quantidadeSegundos = tempo % 60;
    const quantidadeMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const quantidadeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const quantidadeDias = Math.floor((tempo / (60 * 60 * 24)));

    segundos.textContent = formatarDigitos(quantidadeSegundos);
    minutos.textContent = formatarDigitos(quantidadeMinutos);
    horas.textContent = formatarDigitos(quantidadeHoras);
    dias.textContent = formatarDigitos(quantidadeDias);
};

const contagemRgressiva = function (tempo) {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }

        atualizar(tempo);
        tempo --;
    }

    const id = setInterval(contar, 1000);
};

const tempoRestante = function () {
    const dataEvento = new Date("2023-08-29 20:00:00");
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) - 1000);
}

contagemRgressiva(tempoRestante());