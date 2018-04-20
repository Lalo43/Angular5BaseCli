import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {

  userData:string = 'Eduardo';
  passwordData:string='1043';

  setLogin(user: string, password: string){
    var validate:boolean;

    if(this.userData===user && this.passwordData===password)
    {
     return validate=true;
    }
  }

 

}