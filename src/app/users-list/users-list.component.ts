import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';

interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

@Component({
  selector: 'users-list',
  standalone: true,
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss'],
  imports: [
    NgForOf,
  ],
})
export class UsersListComponent {
  title: string = 'users';


  readonly apiService: HttpClient = inject(HttpClient);
  users: IUser[] = [];

  constructor() {
    this.apiService.get<IUser[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: IUser[]) => {
        this.users = response;
      },
    )
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user: IUser): boolean => user.id !== id);
  }
}
