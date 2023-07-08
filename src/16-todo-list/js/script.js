let dataList = [];

const getData = () => JSON.parse(localStorage.getItem("todoList")) ?? [];
const setData = (dataList) => localStorage.setItem("todoList", JSON.stringify(dataList));

const createItem = function (task, status, index) {
    const item = document.createElement("label");

    item.classList.add("todo-item");

    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${index}>
        <div>${task}</div>
        <input type="button" value="X" data-indice=${index}>
    `;

    document.getElementById("todoList").appendChild(item);
};

const clearTask = function () {
    const todoList = document.getElementById("todoList");

    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
};

const refreshScreen = function () {
    clearTask();
    const data = getData();
    data.forEach((item, index) => createItem(item.task, item.status, index));
}

const addItem = function (event) {
    const inputKey = event.key;
    const inputText = event.target.value;

    if (inputKey == "Enter") 
    {
        const data = getData();
        data.push({ task: inputText, status: "" });
        setData(data);
        refreshScreen();
        event.target.value = "";
    }
};

const removeItem = function (index) {
    const data = getData();
    data.splice(index, 1);
    setData(data);
    refreshScreen();
};

const updateItem = function (index) {
    const data = getData();
    data[index].status = data[index].status === "" ? "checked" : "";
    setData(data);
    refreshScreen();
};

const clickItem = function (event) {
    const element = event.target;

    if (element.type === "button") {
        const index = element.dataset.index;
        removeItem(index);
    }else if (element.type === "checked") {
        const index = element.dataset.index;
        updateItem(index);
    }
};

document.getElementById("newItem").addEventListener("keypress", addItem);
document.getElementById("todoList").addEventListener("click", clickItem);

refreshScreen();