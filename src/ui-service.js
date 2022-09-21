const addTaskToUI = function(name, dueDate){

    const main = document.createElement("li");
    const check = document.createElement("input");
    const title = document.createElement("div");
    const date = document.createElement("div");

    main.setAttribute("class", "task");
    main.appendChild(check);
    main.appendChild(title);
    main.appendChild(date);

    check.setAttribute("type", "checkbox");
    title.textContent = name;
    date.textContent = dueDate;

    return main;
}

const addTemplateToUI = function(name, dueDate){

    const main = document.createElement("li");
    const save = document.createElement("button");
    const title = document.createElement("div");
    const date = document.createElement("div");
    const saveIcon = document.createElement("i");
    const titleInput = document.createElement("input");
    const dateInput = document.createElement("input");
    title.appendChild(titleInput);
    save.appendChild(saveIcon);
    date.appendChild(dateInput);
    main.appendChild(title);
    main.appendChild(date);
    main.appendChild(save);

    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Titel...");
    titleInput.setAttribute("name", "title");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    saveIcon.classList.add("fa-solid", "fa-add");


    return main;
}

const findSaveButton = function(line){
    return line.querySelector("button");
}

const deleteFromTaslkListUI = function(line){
    line.remove();
}

const clearTaskList = function(taskListUL){
    taskListUL.querySelectorAll('li').forEach(n => n.remove());
}

const manageHead = function(bool){
    let displayEmpty = (bool) ? "block" : "none";
    let displayHeader = (bool) ? "none" : "flex";
    document.querySelector(".tasklist-empty").style.display = displayEmpty;
    document.querySelector(".tasklist-header").style.display = displayHeader;
}

export { addTaskToUI, addTemplateToUI, findSaveButton, deleteFromTaslkListUI, clearTaskList, manageHead };