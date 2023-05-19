const todos = ["CSS lernen", "JS lernen"];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}
listTodos();

function addTodo(todo) {
  todo.push("HTML lernen");
}
