import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  persons: User[] = [];
  getUsers() {
    return this.persons;
  }
  getUser(id: any) {
    const person = this.persons.find(person => person.id === id);
    if (person) {
      return person;
    } else {
      return {};
    }
  }
  addUser(user: User) {
    user.id = parseInt(Math.random().toString(16).slice(2), 16);
    this.persons.push(user);
  }
  updateUser(updatedUser: User) {
    const index = this.persons.findIndex(person => person.id === updatedUser.id);
    if (index !== -1) {
      this.persons[index] = updatedUser;
    }
  }
  deleteUser(user: User) {
    const index = this.persons.indexOf(user);
    if (index !== -1) {
      this.persons.splice(index, 1);
    }
  }
}
