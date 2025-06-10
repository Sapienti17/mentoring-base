import { Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { NgForOf } from '@angular/common';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoApiService } from '../todos-api.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgForOf, TodoCardComponent],
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
    this.todos = this.todos.filter((todo: ITodo) => todo.id !== id);
  }

}
