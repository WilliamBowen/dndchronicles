import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';



@Injectable()
export class AuthenticationService {
  
  constructor(private _http: Http, private _config: AppConfig) { }

  login(username: string, password: string) {
    return this._http.post(this._config.apiUrl + '/users/authenticate',
                          {username: username, password: password})
              .map((response: Response) => {
                //login successful if ther's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                  //store user details and jwt token in local storage 
                  //to keep user logged in between page refreshes
                  localStorage.setItem('currentUser' ,JSON.stringify(user));
                }
              });
  }

  logout() {
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
