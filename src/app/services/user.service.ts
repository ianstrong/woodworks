import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: any;
  token: string;

  constructor() { }

  async setUserDetails(userInfo) {
    this.userInfo = userInfo;
    console.log("i am set just now");
    this.token = userInfo.jwt;

  }

  getUserDetails() {
    return this.userInfo;
  }

  getTokenDetails() {
    return this.token;
  }


}
