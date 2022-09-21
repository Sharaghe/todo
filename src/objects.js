const Task = function(name, description, prio, dueDate) {
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.prio = prio
}
      
Task.prototype.markDone = function() {
    console.log(this.name)
}

export { Task } ;