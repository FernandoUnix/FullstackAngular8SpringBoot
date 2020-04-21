import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {

  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: String

  constructor(private router: Router, private service: TodoDataService) { }


  ngOnInit() {
    this.refreshTodos();

  }

  refreshTodos() {

    this.service.retrieveAllTodos('fernando').subscribe(

      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.service.deleteTodo('fernando', id).subscribe(
      response => {
        this.message = 'Deletado com sucesso';
        this.refreshTodos();

      }

    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}