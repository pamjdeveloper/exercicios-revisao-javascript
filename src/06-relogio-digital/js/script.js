const relogio = document.getElementsByClassName("relogio")[0];

const obterHoras = function () {
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(() => {
    obterHoras();
}, 1000);