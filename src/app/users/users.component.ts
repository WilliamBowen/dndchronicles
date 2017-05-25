import { Component, OnInit} from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  isLoading = true;
  users;
  subscription;

  constructor(private _usersService: UserService) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(users =>  this.users = users);
  }

  deleteUser(user) {
    if(confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user)
      this.users.splice(index, 1);
      this._usersService.deleteUser(user.id)
        .subscribe(null, err => {
          alert("Could not delete the user.");
          this.users.splice(index, 0, user);
        });
    }
  }


}
