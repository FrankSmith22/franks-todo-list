todos.saveToServer = function(){
  const timeStampedTodoList = this.todoList.map(td => td);
  timeStampedTodoList.push(Date.now());
  const todoListString = JSON.stringify(timeStampedTodoList);
  //create an ajax agent which sends file to server
  const sender = new XMLHttpRequest()
  sender.open("POST", "saveTodoList.php")
  sender.send(todoListString)
}
todos.getServerTodoList = function(){}
todos.setLatestTodoList = function(){}