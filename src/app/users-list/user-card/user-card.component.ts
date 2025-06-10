import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../Interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  user!: IUser;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }


}
