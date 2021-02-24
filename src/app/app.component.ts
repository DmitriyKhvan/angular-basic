import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from './todos.servece';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  todoTitle = ''
  loading = false
  error = ''

  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return 
    }

    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    
    this.todoService.fetchTodos()
      .subscribe(todos => {
        console.log('Response', todos)
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
      })
  }

  removeTodo(id) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !==  id)
      })
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id).subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true
    })
  }
}

