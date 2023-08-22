import { Component } from '@angular/core';
interface User {
  fullName: string;
  phoneNumber: number;
  email: string;
  gender: string;
  age: number;
  relationshipStatus: string;
  visitedCities: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean = false;
  users: User[] = [];
  onFormSubmitted(formData: any) {
    this.submitted = true;
    this.users.push({
      fullName: `${formData.firstName} ${formData.lastName}`,
      phoneNumber: formData.phoneNumber,
      email: formData.email ,
      gender: formData.gender ,
      age: formData.age ,
      relationshipStatus: formData.relationshipStatus ,
      visitedCities: formData.visitedCities
    });
  }
}
