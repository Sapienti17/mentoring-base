import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../Interfaces/todo.interface';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input()
  todo!: ITodo;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
  }
}
