const Task = function(id, name, description, prio, dueDate) {
    this.id = id;
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.prio = prio
}
      
Task.prototype.markDone = function() {
    console.log(this.name)
}

export { Task } ;