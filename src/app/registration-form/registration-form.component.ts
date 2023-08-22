import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  gender: string;
  age: number;
  relationshipStatus: string;
  visitedCities: string[];
}
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  cities: string[] = ['Abbottabad', 'Mansehra', 'Muree', 'Naran', 'Shogran', 'Islamabad', 'Lahore', 'Karachi', 'Peshawar', 'Quetta'];
  @Output() formSubmitted = new EventEmitter<FormData>();
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: [''],
      age: [''],
      relationshipStatus: [''],
      visitedCities: [[]]
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      this.formSubmitted.emit(this.registrationForm.value);
      this.registrationForm.reset();
    }
  }
}
