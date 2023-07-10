const searchImages = async function (text) {
  const key = "12180485-63058e50c2824559402449f76";
  const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
  const response = await fetch(url);
  return response.json();
};

const createLink = function (tag) {
  `<a href="#" onClick="loadGallery('${tag}')">${tag}</a>`;
};

const createCard = function ({ webformatURL, pageURL, tags, likes, comments }) {
  const card = document.createElement("div");
  card.classList.add("card-container");

  card.innerHTML = `
        <a href="${pageURL}" class="card-image">
            <img src=${webformatURL} >
        </a>
        <div class="card-info">
            <div class="card-tags">
               ${tags.split(",").map(createLink).join("")}
            </div>
            <div class="card-action">  
                <div class="card-like">
                    <i class="far fa-thumbs-up"></i>
                    <span>${likes}</span>
                </div>
                <div class="card-comment">
                    <i class="far fa-comment"></i>
                    <span>${comments}</span>
                </div>
                <div class="card-save">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
        </div>
    `;

  return card;
};

const localGalery = async function (text, page = 1) {
  const container = document.querySelector(".container-gallery");
  const { hits, totalHits } = await searchImages(`${text}&page=${page}`);
  const cards = hits.map(createCard);
  container.replaceChildren(...cards);

  const totalPages = Math.ceil(totalHits / 20);

  document.querySelector("#page-total").textContent = `/ ${totalPages}`;
  document.querySelector("#search-input").value = text;
  document.querySelector("#page").value = page;
};

const handleKeypress = function ({ key, target }) {
  if (key === "Enter") {
    localGalery(target.value);
  }
};

const handlePage = function ({ key, target }) {
  const text = document.querySelector("#search-input").value;

  if (key === "Enter") {
    localGalery(text, target.value);
  }
};

const handleNext = function () {
  let page = Number(document.querySelector("#page").value);
  const totalPages = Number(
    document.querySelector("#page-total").textContent.replace("/", "")
  );
  const text = document.querySelector("#search-input").value;

  if (page < totalPages) {
    page++;
    localGalery(text, page);
  }
};

const handlePrevious = function () {
  let page = Number(document.querySelector("#page").value);
  const text = document.querySelector("#search-input").value;

  if (page > 1) {
    page--;
    localGalery(text, page);
  }
};

document
  .querySelector("#search-input")
  .addEventListener("keypress", handleKeypress);
document.querySelector("#page").addEventListener("keypress", handlePage);
document.querySelector("#page-next").addEventListener("click", handleNext);
document
  .querySelector("#page-previous")
  .addEventListener("click", handlePrevious);
