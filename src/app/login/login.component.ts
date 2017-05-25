import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthenticationService,
    private _alert: AlertService) { }

  ngOnInit() {
    //reset login status
    this._auth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this._auth.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this._router.navigate([this.returnUrl]);
        },
        error => {
          this._alert.error(error._body);
          this.loading = false;
        });
  }

}
