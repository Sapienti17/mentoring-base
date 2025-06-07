import { Component, inject } from '@angular/core';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoApiService } from '../todos-api.service';
import { NgFor, NgForOf } from '@angular/common';
import { IUser } from '../Interfaces/user.interface';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgForOf, NgFor],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
export class TodosListComponent {
  todos: ITodo[] = []

  todoApiService: TodoApiService = inject(TodoApiService);

  constructor() {
    this.todoApiService.getUsers().subscribe(
      (response: ITodo[]) => {
        this.todos = response
      },
    )
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo: ITodo): boolean => todo.id !== id);

  }

}
