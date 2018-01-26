/*global localStorage*/
//a place to store todos
let todoList = {
  todos: [],
  getLocalTodoList: function(){
    if (localStorage.getItem(`todos`)) {
      //yes? then set our default todoList array(line 2) to the locally stored array
      this.todos = JSON.parse(localStorage.getItem(`todos`));
      }},
  getServerTodoList: function(){},
  setLatestTodoList: function(){},
  counter: 0,
  displayTodos: function(){
    this.counter = 0
    if(this.todos.length === 0){
      console.log(`Your todo list is empty!`);
    }else{
      console.log(`These are my todos: `)
      todoList.todos.forEach(function(m){
        if(m.completed){
          console.log(`(X) ${m.todoText}`)
        }else{
          todoList.counter++
          console.log(`( ) ${m.todoText}`)
        }
      })
    //using a ternary to test if we should use 'item' or 'items'
    console.log(todoList.counter > 1 || todoList.counter === 0 ? todoList.counter + ` items left` : todoList.counter + ` item left`)
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.showAndSave()},
  deleteTodo: function(position){
    this.todos.splice(position -1, 1);
    this.showAndSave()},
  changeTodo: function(position, todoText){
    this.todos[position - 1].todoText = todoText;
    this.showAndSave();},
  toggleCompleted: function(position){
    let todo = this.todos[position - 1]
    todo.completed = !todo.completed
    this.showAndSave();
  },
  //A function to show, AND save our todoList array in a stringified form in local storage
  showAndSave: function(){
    this.displayTodos()
    const todosString = JSON.stringify(this.todos);
    localStorage.setItem(`todos`, todosString);
  },
  //if every todo is true, make every todo false
  //else make every todo true
  toggleAll: function(){
    if(todoList.counter === 0){
      this.todos.forEach(function(m){
        m.completed = false;
      })
    }
    else{
      this.todos.forEach(function(m){
        m.completed = true;
      })
    }
  this.showAndSave()
  },
}

/////////INITIALIZATION///////////////
todoList.getLocalTodoList();
todoList.displayTodos()