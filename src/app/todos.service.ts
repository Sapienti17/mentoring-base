import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from './Interfaces/todo.interface';

@Injectable({ providedIn: 'root' })


export class TodosService {
  private readonly todoSubject$: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([])
  todos$: Observable<ITodo[]> = this.todoSubject$.asObservable();

  setTodo(todos: ITodo[]) {
    this.todoSubject$.next(todos)
  }

  editTodo(editedTodo: ITodo) {
    this.todoSubject$.next(this.todoSubject$.value.map(
      (todo: ITodo): ITodo => todo.id === editedTodo.id ? editedTodo : todo,
    ))
  }

  createTodo(todo: ITodo) {
    const existingTodo: ITodo | undefined = this.todoSubject$.value.find(
      (currentToto) => currentToto.title === todo.title,
    )

    if ( existingTodo !== undefined ) {
      alert('Такая задача уже создана')
    } else {
      this.todoSubject$.next([todo, ...this.todoSubject$.value])
      alert('Задача успешно создана')
    }
  }

  deleteTodo(id: number) {
    this.todoSubject$.next(this.todoSubject$.value.filter(
      (todo: ITodo) => todo.id !== id,
    ))
  }
}
