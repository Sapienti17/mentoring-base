import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IUser } from '../../Interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

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
  deleteUser: EventEmitter<number> = new EventEmitter();

  @Output()
  editUser: EventEmitter<IUser> = new EventEmitter()

  readonly matDialog: MatDialog = inject(MatDialog)
  
  showUserDialog() {
    this.matDialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    }).afterClosed().subscribe((editResult) => {
      this.editUser.emit(editResult)
    })
  }

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }
}
