import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { UsersApiService } from '../users-api.service';
import { IUser } from '../Interfaces/user.interface';

@Component({
  selector: 'users-list',
  standalone: true,
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss'],
  imports: [NgForOf],
})
export class UsersListComponent {
  title: string = 'users';

  readonly usersApiService: UsersApiService = inject(UsersApiService);
  readonly apiService: HttpClient = inject(HttpClient);

  users: IUser[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((response: IUser[]) => {
      this.users = response;
    })
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user: IUser): boolean => user.id !== id);
  }
}
