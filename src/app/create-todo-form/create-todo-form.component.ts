import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { ITodo } from '../Interfaces/todo.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';


function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if ( value === 'да' || value === 'нет' ) {
      return null
    } else {
      return { invalidCompleted: true }
    }
  }
}


@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatButtonModule, MatLabel, MatFormField, MatError, MatInput,
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
      completed: ['', [Validators.required, completedValidator()]],
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
