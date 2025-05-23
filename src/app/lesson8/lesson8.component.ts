import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-lesson8',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './lesson8.component.html',
  styleUrl: './lesson8.component.scss',
})

export class Lesson8Component {

  readonly apiService: HttpClient = inject(HttpClient);

  users: IUser[] = [];

  idNumber: IUser | undefined;
  cityLebsackbury: IUser | undefined;
  firstFiveUsers: string[] = [];
  reverseUsers: string[] = [];
  usersLength: number = 0;
  usersWithSiteCom: string[] = [];
  namelengthTwelve: IUser[] = []
  userToLowerCase: string[] = []

  constructor() {
    this.apiService.get<IUser[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: IUser[]) => {
        this.users = response;
        this.idNumber = response.find((user: IUser): boolean => user.id === 9);
        this.cityLebsackbury = response.find((user: IUser): boolean => user.address.city === 'Lebsackbury');
        this.firstFiveUsers = response.slice(0, 5).map((user: IUser): string => (user.name));
        this.reverseUsers = response.reverse().map((user: IUser): string => (user.name));
        this.usersLength = response.length;
        this.usersWithSiteCom = response.filter((user: IUser): boolean => user.website.endsWith('.com'))
        .map((user: IUser): string => (user.website));
        this.namelengthTwelve = response.filter((user: IUser): boolean => user.username.length > 12);
        this.userToLowerCase = response.map((user: IUser): string => user.username.toLowerCase())

      },
    )
  }


}
