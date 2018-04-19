import { Component, OnInit, OnDestroy, Input, Output } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";


@Component({
    selector: 'app-internal-window-login',
    templateUrl: './app-internal-window-login.html',
    styleUrls: ['./app-internal-window-login.css']

})
export class InternalWindowLoginComponent implements OnInit, OnDestroy {
    pagina: string;
    constructor(private _pageRouter: Router){
        
    }
    ngOnInit(){  
             
    }

    ngOnDestroy(){        
    }

    newMain(){
    this._pageRouter.onSameUrlNavigation;   

    }
    

}