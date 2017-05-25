import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private _userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteuser(_id: string) {
    this._userService.deleteUser(_id)
      .subscribe(() => {this.loadAllUsers()});
  }

  private loadAllUsers() {
    this._userService.getUsers()
      .subscribe(users => {this.users = users});
  }

}
