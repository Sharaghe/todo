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
    let id = taskList.length+1;
    taskList.push(new Task(id, name, description, prio, dueDate));
    updateTaskList();
  }

  function toggleEmptyList(){
    let isListEmpty = (taskList.length > 0) ? false : true;
    ui.manageHead(isListEmpty);
  }

  function removeEntry(line){
    let taskid = line.getAttribute("data-id");
    taskList = taskList.filter(elem => elem.id != taskid);

    line.classList.add("vanish");
    setTimeout(updateTaskList, 1000);
  }

  function updateTaskList(){
    ui.clearTaskList(taskListUL);
    taskList.forEach(task => {

      var line = ui.addTaskToUI(task.id, task.name, task.prio, task.dueDate);
      taskListUL.appendChild(line);

      let checkButton = ui.findCheckButton(line);

      checkButton.addEventListener("click", () => {
        removeEntry(line);
      });
    });
    toggleEmptyList();
    addForm();
  }

  updateTaskList();
  
