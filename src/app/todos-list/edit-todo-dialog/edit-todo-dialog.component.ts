import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule, ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ITodo } from '../../Interfaces/todo.interface';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDialogClose,
    MatSelect,
    MatOption,
  ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
})
export class EditTodoDialogComponent {

  readonly data: { todo: ITodo } = inject(MAT_DIALOG_DATA)

  editingTodoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editingTodoForm = this.fb.group({
      title: [this.data.todo.title, [Validators.required, Validators.minLength(3)]],
      userId: [this.data.todo.userId, [Validators.required, Validators.minLength(4)]],
      completed: [this.data.todo.completed, [Validators.required]],
    });
  }

  get todoWithUpdatedFields(): ITodo {
    return {
      ...this.editingTodoForm.value,
      id: this.data.todo.id,
    }
  }
}
