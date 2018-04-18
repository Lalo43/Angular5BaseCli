import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']

})
export class GitHubCardComponent implements OnInit, OnDestroy {
   
    gitHubdata: GitHubModel;
    constructor(){
        this.gitHubdata = new GitHubModel();
        this.gitHubdata.avatar_url = 'https://png.icons8.com/windows/1600/cat-profile.png'
        this.gitHubdata.follower;
        this.gitHubdata.following;
        this.gitHubdata.login;
        this.gitHubdata.name;
    }
    ngOnInit(){        
    }
    ngOnDestroy(){        
    }

}