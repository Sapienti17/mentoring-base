import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { UsersApiService } from '../users-api.service';
import { IUser } from '../Interfaces/IUser';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'users-list',
  standalone: true,
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss'],
  imports: [NgForOf, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  title: string = 'users';

  readonly usersApiService: UsersApiService = inject(UsersApiService);
  readonly usersService: UsersService = inject(UsersService)
  readonly snackBar: MatSnackBar = inject(MatSnackBar)

  constructor() {
    this.usersApiService.getUsers().subscribe((response: IUser[]) => {
      this.usersService.setUsers(response);
    })
  }

  public createUser(event: IUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: event.name,
      email: event.email,
      address: event.address,
      phone: event.phone,
      website: event.website,
      company: event.company,
    });
    this.snackBar.open('Пользователь создан!', 'Ок', {
      duration: 2000,
    })
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
    this.snackBar.open('Пользователь удалён!', 'Ок', {
      duration: 2000,
    })
  }

  public editUser(user: IUser) {
    if (user) {
      this.usersService.editUsers(user);
      this.snackBar.open('Пользователь сохранён!', 'Ок', {
        duration: 2000,
      })
    }
  }
}
