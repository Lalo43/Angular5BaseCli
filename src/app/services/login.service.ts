import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
  private login = new Subject<string>();
  private password = new Subject<string>();

  constructor() { }

  setLogin(){
      this.login.next("Eduardo");
  }

  setPassword(){
    this.password.next("123456");
}

  getLogin(){
    return this.login.asObservable();
  }

}