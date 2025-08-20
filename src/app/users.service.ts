import { Injectable } from '@angular/core';
import { IUser } from './Interfaces/IUser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UsersService {
  private readonly usersSubject$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([])
  users$: Observable<IUser[]> = this.usersSubject$.asObservable()

  setUsers(users: IUser[]) {
    this.usersSubject$.next(users)
  }

  editUsers(editedUser: IUser) {
    this.usersSubject$.next(this.usersSubject$.value.map(
      (user: IUser): IUser => user.id === editedUser.id ? editedUser : user,
    ))
  }

  createUser(user: IUser) {
    const existingUser: IUser | undefined = this.usersSubject$.value.find(
      (currentUser: IUser) => currentUser.email === user.email,
    )

    if (existingUser) {
      alert('Пользователь с таким Email уже зарегистрирован')
    } else {
      this.usersSubject$.next([user, ...this.usersSubject$.value])
      alert('Пользователь успешно добавлен')
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(this.usersSubject$.value.filter((user: IUser) => user.id !== id));
  }
}
