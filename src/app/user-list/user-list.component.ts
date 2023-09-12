import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() persons: any[] = [];
  @Output() deleteRequested = new EventEmitter<any>();
  @Output() editRequested = new EventEmitter<{ person: any, index: any }>();

  // No need to define delete and edit methods here

  // Emit events when delete or edit is requested
  delete(index: any) {
    this.deleteRequested.emit(index);
  }

  edit(person: any, index: any) {
    console.log("Edit button clicked for:", person,index);
    this.editRequested.emit({ person, index });

  }
}

