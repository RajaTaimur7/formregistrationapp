import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  persons: User[] = [];
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.persons = this.userService.getUsers();
  }
  delete(index: number) {
    this.userService.deleteUser(this.persons[index]);
    this.persons.splice(index, 1);
  }
  edit(person: User, index: number) {
    console.log('Editing person:', person);
    this.router.navigate(['/form'], { state: { user: person } });
  }
}
