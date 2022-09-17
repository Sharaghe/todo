const addTaskToUI = function(name, dueDate){

    const main = document.createElement("li");
    const check = document.createElement("input");
    const title = document.createElement("div");
    const date = document.createElement("div");
    main.appendChild(check);
    main.appendChild(title);
    main.appendChild(date);

    check.setAttribute("type", "checkbox");
    title.textContent = name;
    date.textContent = dueDate;

    return main;
}

export default addTaskToUI;