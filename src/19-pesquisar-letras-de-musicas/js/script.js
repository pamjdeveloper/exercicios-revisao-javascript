const findLyrics = (artist, song) => {
    let url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    return url;
};

const form = document.querySelector('#lyrics-form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
});


const doSubmit = async () => {
    const lyricsEl = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist").value;
    const song = document.querySelector("#song").value;

    lyricsEl.innerHTML = `<div class="spinner-grow" role="status"><span class="sr-only"></span></div>`;

    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();

        if (data.lyrics) {
            lyricsEl.innerHTML = data.lyrics;
        }else {
            lyricsEl.innerHTML = data.error;
        }

    } catch (err) {
        alert(`Artist or Song not found: ${err}`);
    }
}

const cancel = () => {
    window.location.reload();
}

document.getElementById("btn-cancel").addEventListener("click", cancel);
