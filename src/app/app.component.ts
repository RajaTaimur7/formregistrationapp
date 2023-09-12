import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: User[] = [];
  editPerson: any = null;

  constructor() {
  }

  add(user: any) {
    let index = this.persons.findIndex((person: any) => person.id === user.id);
    if (index !== -1) {
      this.persons[index] = user;
      return;
    } else {
      this.persons.push(user);
    }
  }

  delete(index: number) {
    this.persons.splice(index, 1);
  }

  editReq(event: { person: User, index: any }) {
    this.editPerson = {...event.person};
    console.log(this.editPerson);

  }
}
