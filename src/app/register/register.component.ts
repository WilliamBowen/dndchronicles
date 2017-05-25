import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _alert: AlertService
  ) { }

  register() {
    this.loading = true;
    this._userService.addUser(this.model)
      .subscribe(
        data => {
          this._alert.success('Registration successful', true);
          this._router.navigate(['/login']);
        },
        error => {
          this._alert.error(error._body);
          this.loading = false;
        });
  }

}
