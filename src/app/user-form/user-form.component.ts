import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from '../_services/validator.service';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { User } from '../_models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  user = new User();

  constructor(fb: FormBuilder,
              private _userService: UserService,
              private _router: Router,
              private _route: ActivatedRoute) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        ValidatorService.emailValidator
      ])],
      phone: [''],
      address: fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: ['']
      })
    });
   }

  ngOnInit() {
    var id = this._route.params.subscribe(params => {
      var id = params['id']; 
      this.title = id ? "Edit User" : "New User";

      if(!id) return;
      this._userService.getUser(id)
          .subscribe(
            user => this.user = user,
            response => {
              if(response.status == 404) {
                this._router.navigate(['NotFound']);
              }
            });
    });
  }

  onSubmit() {
    var result;

    if (this.user._id)
      result = this._userService.updateUser(this.user);
    else
      result = this._userService.addUser(this.user);
      
    result.subscribe(x => {
        this.form.markAsPristine();
        this._router.navigate(['users']);
      })
  }

}
