import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITodo } from '../../Interfaces/ITodo';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { LimitCharsPipe } from '../todo-pipe/todo-pipe.component';
import { CardShadowDirective } from '../../Directives/card-shadow.directive';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [
    LimitCharsPipe,
    CardShadowDirective,
  ],
})
export class TodoCardComponent {
  @Input()
  todo!: ITodo;

  @Output()
  deleteTodo: EventEmitter<number> = new EventEmitter();

  @Output()
  editTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  readonly matDialog: MatDialog = inject(MatDialog)

  showTodoDialog() {
    this.matDialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    }).afterClosed().subscribe((todoResult: ITodo) => {
      if (todoResult) {
        this.editTodo.emit(todoResult)
      }
    })
  }

  onDeleteTodo(id: number) {
    this.matDialog.open(DeleteTodoDialogComponent).afterClosed().subscribe((result: boolean) => {
      if (result) {
        if (this.todo.id) {
          this.deleteTodo.emit(id);
        }
      }
    })

  }
}
