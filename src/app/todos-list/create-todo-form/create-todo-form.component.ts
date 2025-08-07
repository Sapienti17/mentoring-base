import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITodo } from '../../Interfaces/todo.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatButtonModule, MatLabel, MatFormField, MatError, MatInput, MatSelect, MatOption,
  ],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
})

export class CreateTodoFormComponent {
  @Output()
  public createTodo: EventEmitter<ITodo> = new EventEmitter()

  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      userId: ['', [Validators.required, Validators.minLength(4)]],
      completed: ['', [Validators.required]],
    });
  }

  private getCompletedValue() {
    const value: string = this.todoForm.get('completed')?.value.trim().toLowerCase();
    return value === 'да' ? true : false;
  }

  todoSubmit() {
    this.createTodo.emit({ ...this.todoForm.value, completed: this.getCompletedValue() })
    this.todoForm.reset()
  }
}
