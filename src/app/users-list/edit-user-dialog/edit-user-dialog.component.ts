import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    MatDialogClose,
  ],
})

export class EditUserDialogComponent {

  readonly data = inject(MAT_DIALOG_DATA)

  public editingUserForm = new FormGroup({
    name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl(this.data.user.address.city, [Validators.required, Validators.minLength(2)]),
    }),
    phone: new FormControl(this.data.user.phone, Validators.required),
    website: new FormControl(this.data.user.website, Validators.required),
    company: new FormGroup({
      name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(3)]),
    }),
  })

  get UserWithUpdatedFields() {
    return {
      ...this.editingUserForm.value,
      id: this.data.user.id,
    }
  }
}
