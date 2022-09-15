import "./style.scss";

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