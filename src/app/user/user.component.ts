import {Component, computed, signal} from '@angular/core';
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
  // selectedUser = DUMMY_USERS[randomIndex];

//   using signal here
selectedUser = signal(DUMMY_USERS[randomIndex]);
//signal use korle get use korbona
  imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar)


//better practise-- getter method
// get imagePath(){
//   return 'assets/users/'+ this.selectedUser.avatar
//   }

  onSelectUser(){
    // again recalculate random number in local scope
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // using set for signals
    // console.log('clicked here')
  // this.selectedUser=DUMMY_USERS[randomIndex];
  }

}
