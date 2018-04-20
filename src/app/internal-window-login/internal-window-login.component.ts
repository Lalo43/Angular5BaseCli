import { Component, OnInit, OnDestroy} from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";


@Component({
    selector: 'app-internal-window-login',
    templateUrl: './internal-window-login.component.html',
    styleUrls: ['./internal-window-login.component.css']

})
export class InternalWindowLoginComponent implements OnInit, OnDestroy {
    
    user: string;
    password: string;
    constructor(private _loginService: LoginService, private _pageRouter: Router){
        
    }
    ngOnInit(){  
             
    }

    ngOnDestroy(){        
    }

    loginUsers(){
        var inputData=this._loginService.setLogin(this.user,this.password);
        if (inputData==true)
        {
            this._pageRouter.navigate(['']);
        }   

    }
    

}