import "./style.scss";
import * as ui from "./ui-service.js";
import { Task } from "./objects.js";
 
  let taskList = [];
  const taskListUL = document.querySelector(".task-list");

  function addForm(){
    let taskForm = ui.addTemplateToUI();
    taskListUL.appendChild(taskForm);
    let saveButton = ui.findSaveButton(taskForm);
    saveButton.addEventListener("click", () => { 
      saveNewLine(taskForm);
    });
  }

  function saveNewLine(newLine){
    let title = newLine.querySelector("input[name='title']").value;
    let date =  newLine.querySelector("input[name='date']").value;
    addToTaskList(title, "", date, "");
  }

  function addToTaskList(name, description, dueDate, priority){
    taskList.push(new Task(name, description, dueDate, priority));
    updateTaskList();
  }

  function updateTaskList(){
    ui.clearTaskList(taskListUL);
    taskList.forEach(task => {
      taskListUL.appendChild(ui.addTaskToUI(task.name, task.dueDate));
    });
    let isListEmpty = (taskList.length > 0) ? false : true;
    ui.showEmptyInfo(isListEmpty);
    addForm();
  }

  updateTaskList();
  
