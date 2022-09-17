import "./style.scss";
import addTaskToUI from "./ui-service.js";

function Task(name, description, dueDate, priority) {
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
  
  Task.prototype.markDone = function() {
    console.log(this.name)
  }
 
  let taskList = [];

  function addToTaskList(name, description, dueDate, priority){
    taskList.push(new Task(name, description, dueDate, priority));
    console.log(taskList);
  }

  addToTaskList("Test", "1234", 12-12-12, "High");

  let taskListUL = document.querySelector(".task-list");
  taskListUL.appendChild(addTaskToUI("Müll rausbringen", "12-4"));