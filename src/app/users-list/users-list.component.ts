import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { UsersApiService } from '../users-api.service';
import { IUser } from '../Interfaces/user.interface';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

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
    })
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
}
