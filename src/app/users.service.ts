import { Injectable } from '@angular/core';
import { IUser } from './Interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UsersService {
  usersSubject$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([])

  setUsers(users: IUser[]) {
    this.usersSubject$.next(users)
  }

  editUsers(editedUser: IUser) {
    this.usersSubject$.next(this.usersSubject$.value.map(
      user => {
        if ( user.id === editedUser.id ) {
          return editedUser
        } else {
          return user
        }
      },
    ))
  }

  createUser(user: IUser) {
    this.usersSubject$.next([...this.usersSubject$.value, user])
  }

  deleteUser(id: number) {
    this.usersSubject$.next(this.usersSubject$.value.filter((user: IUser): boolean => user.id !== id));
  }
}
