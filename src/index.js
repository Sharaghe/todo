import "./style.scss";
import * as ui from "./ui-service.js";
import { Task } from "./objects.js";
 
  let taskList = [];
  const taskListUL = document.querySelector(".task-list");

  function addForm(){
    let taskForm = ui.addTemplateToUI();
    taskListUL.appendChild(taskForm);
    let form = ui.findForm(taskForm);
    form.addEventListener("submit", (e) => { 
      e.preventDefault();
      saveNewLine(taskForm);
    });
  }

  function saveNewLine(newLine){
    let title = newLine.querySelector("input[name='title']").value;
    let date =  newLine.querySelector("input[name='date']").value;
    let prio =  newLine.querySelector("select").value;
    addToTaskList(title, "", prio, date);
  }

  function addToTaskList(name, description, prio, dueDate){
    taskList.push(new Task(name, description, prio, dueDate));
    updateTaskList();
  }

  function updateTaskList(){
    ui.clearTaskList(taskListUL);
    taskList.forEach(task => {
      taskListUL.appendChild(ui.addTaskToUI(task.name, task.prio, task.dueDate));
    });
    let isListEmpty = (taskList.length > 0) ? false : true;
    ui.manageHead(isListEmpty);
    addForm();
  }

  updateTaskList();
  
