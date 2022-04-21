import './style.css';
// import { Todo } from './js/classes/todo.class';
// import { TodoList } from './js/classes/todo-list.class';
import { Todo, TodoList } from './js/classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach((tarea) => crearTodoHtml(tarea));
// this.todos = this.todos.map((obj) => Todo.fromJson(obj));

console.log('todos', todoList.todos);

// todoList.todos[5].imprimirClase();
