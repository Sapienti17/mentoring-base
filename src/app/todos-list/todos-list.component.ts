import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoApiService } from '../todos-api.service';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar) {
    this.todoApiService.getUsers().subscribe(
      (response: ITodo[]) => {
        this.todosService.setTodo(response)
      },
    )
  }

  public createTodo(event: ITodo) {
    const newTodo = {
      id: new Date().getTime(),
      title: event.title,
      userId: event.userId,
      completed: event.completed,
    };
    this.todosService.createTodo(newTodo);
    this.snackBar.open('Задача создана!', 'Ок', {
      duration: 2000,
    })
  }

  public deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
    this.snackBar.open('Задача успешно удалена!', 'Ок', {
      duration: 2000,
    })
  }

  public editTodo(todo: ITodo) {
    this.todosService.editTodo(todo)
    this.snackBar.open('Задача сохранена', 'Ок', {
      duration: 2000,
    })

  }
}
