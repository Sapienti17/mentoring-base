import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoApiService } from '../todos-api.service';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgForOf, TodoCardComponent, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {

  readonly todoApiService: TodoApiService = inject(TodoApiService);
  readonly todosService = inject(TodosService)

  constructor() {
    this.todoApiService.getUsers().subscribe(
      (response: ITodo[]) => {
        this.todosService.setTodo(response)
      },
    )
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
