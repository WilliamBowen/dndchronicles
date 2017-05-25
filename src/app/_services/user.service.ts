import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  constructor(private _http: Http, private _config: AppConfig) { }

  getUsers() {
    return this._http.get(this.url(), this.jwt())
      .map((res: Response) => res.json());
  }

  getUser(_id: string) {
    return this._http.get(this.url(_id), this.jwt())
      .map((res: Response) => res.json());
  }

  addUser(user: User) {
    return this._http.post(this.url('register'), user, this.jwt())
      .map((res: Response) => res.json());
  }

  updateUser(user: User) {
    return this._http.put(this.url(user._id), user, this.jwt())
      .map((res: Response) => res.json());
  }

  deleteUser(_id: string) {
    return this._http.delete(this.url(_id), this.jwt())
      .map((res: Response) => res.json());
  }

  // private helper methods
  private url(path?: string) : string {
    if(path)
      return this._config.apiUrl + "/users/" + path;
    return this._config.apiUrl + "/users";
  }

  private jwt() {
    //create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token });
      console.log(headers);
      return new RequestOptions({ headers: headers });
    }
  }
}