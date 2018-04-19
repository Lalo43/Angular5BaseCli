import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']

})
export class GitHubCardComponent implements OnInit, OnDestroy {
   
    gitHubData: GitHubModel;
    constructor(){
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatar_url = 'https://png.icons8.com/windows/1600/cat-profile.png'
        this.gitHubData.follower = 1;
        this.gitHubData.following = 1;
        this.gitHubData.login = "Lalo43";
        this.gitHubData.name = "David ERB";
    }
    ngOnInit(){        
    }
    ngOnDestroy(){        
    }

}