const addTaskToUI = function(nameVal, prioVal, dueDateVal){

    const main = document.createElement("li");
    const form = document.createElement("form");
    const check = document.createElement("input");
    const title = document.createElement("div");
    const prio = document.createElement("div");
    const date = document.createElement("div");

    main.setAttribute("class", "task");
    main.appendChild(form);

    form.appendChild(check);
    form.appendChild(title);
    form.appendChild(prio);
    form.appendChild(date);

    check.setAttribute("type", "checkbox");
    title.textContent = nameVal;
    const prioText = document.createElement("span");
    prioText.textContent = prioVal;
    prioText.classList.add("prio-tag", prioVal);
    prio.appendChild(prioText);
    date.textContent = dueDateVal;

    return main;
}

const addTemplateToUI = function(){

    const main = document.createElement("li");
    main.classList.add("add-area");
    const form = document.createElement("form");
    main.appendChild(form);

    const save = document.createElement("button");
    const title = document.createElement("div");
    const date = document.createElement("div");
    const saveIcon = document.createElement("i");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("required", "");
    const dateInput = document.createElement("input");
    const prio = document.createElement("select");

    save.setAttribute("type", "submit");

    prio.setAttribute("size", "1");
    prio.setAttribute("name", "prio");
    prio.append(Object.assign(document.createElement('option'),{value:"high", textContent: "Hoch"}));
    prio.append(Object.assign(document.createElement('option'),{value:"medium", textContent: "Normal"}));
    prio.append(Object.assign(document.createElement('option'),{value:"low", textContent: "Niedrig", selected: "selected"}));

    title.appendChild(titleInput);
    save.appendChild(saveIcon);
    date.appendChild(dateInput);
    form.appendChild(title);
    form.appendChild(prio);
    form.appendChild(date);
    form.appendChild(save);

    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Titel...");
    titleInput.setAttribute("name", "title");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    dateInput.valueAsDate = new Date();
    saveIcon.classList.add("fa-solid", "fa-add");


    return main;
}

const findForm = function(line){
    return line.querySelector("form");
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

export { addTaskToUI, addTemplateToUI, findForm, deleteFromTaslkListUI, clearTaskList, manageHead };