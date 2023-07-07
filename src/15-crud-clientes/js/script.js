const openModal = function () {
    document.getElementById("modal").classList.add("active");
};

const closeModal = function () {
    clearFields();
    document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage =(dbCliente) => localStorage.setItem("db_client", JSON.stringify(dbCliente)); 

const createClient = function (client) {
    const dbCliente = getLocalStorage();
    dbCliente.push(client);
    setLocalStorage(dbCliente);
};

const readClient = () => getLocalStorage();

const isValidField = function () {
    return document.getElementById("form").reportValidity();
};

const clearFields = function () {
    const fields = document.querySelectorAll(".modal-field");
    fields.forEach(field => field.value = "" );
    document.getElementById("name").dataset.index = "new";
};

const saveClient = function () {
    if (isValidField()){
        const client = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            city: document.getElementById("city").value
        }

        const index = document.getElementById('name').dataset.index;

        if (index == "new") {
            createClient(client);
            updateTable();
            closeModal();
        }else {
            updateTable();
            closeModal();
        }
    }
};

const deleteClient = function (index) {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
};


const createRow = function (client, index) {
    
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `;

    document.querySelector("#tableClient>tbody").appendChild(newRow);
};

const clearTable = function () {
    const rows = document.querySelectorAll("#tableClient>tbody tr");
    rows.forEach(row => row.parentNode.removeChild(row));
};

const updateTable = function () {
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);
};

const fillFields = function (client) {
    document.getElementById("name").value = client.name;
    document.getElementById("email").value = client.email;
    document.getElementById("phone").value = client.phone;
    document.getElementById("city").value = client.city;
    document.getElementById("name").dataset.index = client.index;
};

const editClient = function (index) {
    const client = readClient()[index];
    client.index = index;
    fillFields(client);
    document.querySelector(".modal-header>h2").textContent  = `Editando ${client.name}`;
    openModal();
};


const editDelete = function (event) {
    if (event.target.type == "button") {

        const [action, index] = event.target.id.split("-");

        if (action == "edit") {
            editClient(index);

        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.name}`);

            if (response) {
                deleteClient(index);
                updateTable();
            }
        }
    }
};

updateTable();

document.getElementById("cadastrarCliente").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("save").addEventListener("click", saveClient);

document.querySelector("#tableClient>tbody").addEventListener("click", editDelete);

document.getElementById("cancel").addEventListener("click", closeModal);