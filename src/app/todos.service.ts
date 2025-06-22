import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './Interfaces/todo.interface';

@Injectable({ providedIn: 'root' })


export class TodosService {
  readonly todoSubject$: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([])

  setTodo(todos: ITodo[]) {
    this.todoSubject$.next(todos)
  }

  editTodo(editedTodo: ITodo) {
    this.todoSubject$.next(this.todoSubject$.value.map(
      (todo: ITodo): ITodo => todo.id === editedTodo.id ? editedTodo : todo,
    ))
  }

  createTodo(todo: ITodo) {
    this.todoSubject$.next([...this.todoSubject$.value, todo])
  }

  deleteTodo(id: number) {
    this.todoSubject$.next(this.todoSubject$.value.filter(
      (todo: ITodo) => todo.id !== id,
    ))
  }
}
