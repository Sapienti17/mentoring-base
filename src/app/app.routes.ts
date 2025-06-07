import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Lesson8Component } from './lesson8/lesson8.component';
import { TodosListComponent } from './todos-list/todos-list.component';


export const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: '', component: HomePageComponent },
  { path: 'lesson8', component: Lesson8Component },
  { path: 'todo', component: TodosListComponent },

];
