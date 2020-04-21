import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('fernando', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {

    if (this.id == -1) {
    console.log(this.id)

      this.todoService.createTodo('fernando',this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoService.updateTodo('fernando', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);
        }
      );
    }
  }
}
