import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITodo } from '../Interfaces/todo.interface';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
      userId: [[], [Validators.required, Validators.minLength(4)]],
      title: [[], [Validators.required, Validators.minLength(3)]],
      completed: [[], Validators.required],
    });
  }

  todoSubmit() {
    this.createTodo.emit(this.todoForm.value)
    this.todoForm.reset()
  }
}
