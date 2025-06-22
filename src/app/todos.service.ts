import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './Interfaces/todo.interface';

@Injectable({ providedIn: 'root' })


export class TodosService {
  todoSubject$: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([])

  setTodo(todos: ITodo[]) {
    this.todoSubject$.next(todos)
  }

  editTodo(editedTodo: ITodo) {
    this.todoSubject$.next(this.todoSubject$.value.map(
      (todo: ITodo): ITodo => {
        if ( todo.id === editedTodo.id ) {
          return editedTodo
        } else {
          return todo
        }
      }))
  }

  createTodo(todo: ITodo) {
    this.todoSubject$.next([...this.todoSubject$.value, todo])
  }

  deleteTodo(id: number) {
    this.todoSubject$.next(this.todoSubject$.value.filter(
      (todo: ITodo): boolean => todo.id !== id,
    ))
  }
}
