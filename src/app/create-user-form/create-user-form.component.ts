import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../Interfaces/user.interface';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {

  @Output()
  createUser: EventEmitter<IUser> = new EventEmitter()

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
    phone: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }),
  })

  formSubmit() {
    this.createUser.emit(this.userForm.value as IUser)
    this.userForm.reset()
  }
}
