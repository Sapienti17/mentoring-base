import { Injectable } from '@angular/core';
import { IUser } from './Interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UsersService {
  private readonly usersSubject$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([])
  users: Observable<IUser[]> = this.usersSubject$.asObservable()

  setUsers(users: IUser[]) {
    this.usersSubject$.next(users)
  }

  editUsers(editedUser: IUser) {
    this.usersSubject$.next(this.usersSubject$.value.map(
      (user: IUser) => user.id === editedUser.id ? editedUser : user,
    ))
  }

  createUser(user: IUser) {
    this.usersSubject$.next([...this.usersSubject$.value, user])
  }

  deleteUser(id: number) {
    this.usersSubject$.next(this.usersSubject$.value.filter((user: IUser) => user.id !== id));
  }
}
