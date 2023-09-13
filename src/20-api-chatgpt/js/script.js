const formQuestionChat = document.getElementById("form-question-chat");
const OPEN_API_KEY = "sua chave";

if (OPEN_API_KEY === "") {
    document.getElementById("question").innerHTML = "<span style='color: #FF4500;'>Necessário usar uma chave válida!</span>";
}

const generateResponse = () => {
    formQuestionChat.addEventListener("submit", async (event) => {
        event.preventDefault();

        document.getElementById("btn-question-chat").value = "Pesquisando...";

        let question = document.getElementById("input-question").value;

        document.getElementById("question").innerHTML = question;

        document.getElementById("response").innerHTML = "<span></span>";

        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPEN_API_KEY,
            },

            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: question,
                max_tokens: 2048,
                temperature: 0.5
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("response").innerHTML = data.choices[0].text;
        })
        .catch(() => {
            document.getElementById("response").innerHTML = "Sem resposta";
        });

        document.getElementById("btn-question-chat").value = "Enviar";
    });
}

if (formQuestionChat) {
    generateResponse();
}

const cancel = () => {
    window.location.reload();
}

document.getElementById("btn-reset-chat").addEventListener("click", cancel);

