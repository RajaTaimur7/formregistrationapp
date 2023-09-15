import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.interface';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  isUpdated: boolean = false;
  personForm: FormGroup;
  persons: User[] = [];
  cities: string[] = ['Islamabad', 'Lahore', 'Peshawar', 'Karachi', 'Quetta', 'Gilgit', 'Kashmir', 'Mansehra', 'Abbottabad', 'Naran'];
  selectedCities: FormControl = new FormControl([]);
  formSubmittedWithoutRequiredFields = false;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: [''],
      gender: [''],
      age: [''],
      relationshipStatus: [''],
      visitedCities: [[]]

    });
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const person: any = this.userService.getUser(+params['id']);
        if (person['id']) {
          this.isUpdated = true;
          this.personForm.setValue(person);
        }
      }
    });
  }

  ngOnInit() { }

  add() {
    console.log('Form valid:', this.personForm.valid);
    if (this.personForm.valid) {
      this.userService.addUser(this.personForm.value);
      this.isUpdated = false;
      this.personForm.reset();
      this.router.navigate(['/table']);
    } else {
      this.formSubmittedWithoutRequiredFields = true;
    }
  }
  edit() {
    this.isUpdated = false;
    this.userService.updateUser(this.personForm.value);
    this.router.navigate(['/table']);
  }
  update() {
    this.userService.updateUser(this.personForm.value);
    this.router.navigate(['/table']);
  }
}
