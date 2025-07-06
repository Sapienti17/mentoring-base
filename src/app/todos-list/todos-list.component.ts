import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoApiService } from '../todos-api.service';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgForOf, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {

  readonly todoApiService: TodoApiService = inject(TodoApiService);
  readonly todosService: TodosService = inject(TodosService)

  constructor() {
    this.todoApiService.getUsers().subscribe(
      (response: ITodo[]) => {
        this.todosService.setTodo(response)
      },
    )
  }

  public createTodo(event: ITodo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      userId: event.userId,
      title: event.title,
      completed: event.completed,
    })
  }

  public deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
