import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITodo } from './Interfaces/todo.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoApiService {
  readonly apiService: HttpClient = inject(HttpClient);

  getUsers(): Observable<ITodo[]> {
    return this.apiService.get<ITodo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );
  }
}
