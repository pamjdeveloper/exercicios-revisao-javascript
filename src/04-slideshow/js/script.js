const containerDeItems = document.querySelector("#container-items");

const listaDeImagens = [
    {'id': '1', 'url': '../../assets/imagens/chrono.jpg'},
    {'id': '2', 'url': '../../assets/imagens/inuyasha.jpg'},
    {'id': '3', 'url': '../../assets/imagens/tenchi.jpg'},
    {'id': '4', 'url': '../../assets/imagens/tenjhotenge.jpg'},
    {'id': '5', 'url': '../../assets/imagens/yuyuhakusho.jpg'},
    {'id': '6', 'url': '../../assets/imagens/ippo.png'},
];

const carregarImagens = function (listaDeImagens, container) {
    listaDeImagens.forEach (imagem => {
        container.innerHTML += `
        <div class="item">
            <img src="${imagem.url}">
        </div>
        `;
    });
}

carregarImagens(listaDeImagens, containerDeItems);

let items = document.querySelectorAll(".item");

const imagemAnterior = function() {
    containerDeItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const proximaImagem = function() {
    const ultimoItem = items[items.length - 1];
    containerDeItems.insertBefore(ultimoItem, items[0]);
    items = document.querySelectorAll(".item");
}

document.querySelector("#previous").addEventListener("click", imagemAnterior);
document.querySelector("#next").addEventListener("click", proximaImagem);