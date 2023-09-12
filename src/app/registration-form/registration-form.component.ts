import { Component,EventEmitter,Output,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  isUpdated: boolean = false;
  @Output() addUser = new EventEmitter<any>();
  @Input() persons: User[] = [];
  @Input() set editUser(value: any) {
    if (value) {
      this.isUpdated = true;
      this.personForm.setValue(value);
    }
}
  currentIndex: any;
  personForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: [''],
      id: []
    });

  }

  add() {
    if (!this.personForm.controls['id'].value) {
      this.personForm.controls['id'].setValue(Math.random().toString(16).slice(2));
    }
    this.addUser.emit(this.personForm.value);
    this.isUpdated = false;
    this.personForm.reset();
  }


}
