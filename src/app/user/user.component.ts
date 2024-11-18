import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
// for using random person
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

//advantages or core features of angular
//now we can access the selectedUser property from inside the template[html] of this component
//so all the properties we are defining in component class are available in the template of that component

//better practise-- getter method
get imagePath(){
  return 'assets/users/'+ this.selectedUser.avatar
  }

  onSelectUser(){
    // again recalculate random number in local scope
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

    // console.log('clicked here')
  this.selectedUser=DUMMY_USERS[randomIndex];
  }

}
