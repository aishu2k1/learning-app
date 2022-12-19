import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'icse',
    templateUrl: './icse.component.html',
    styleUrls: ['./icse.component.css']
})
export class IcseComponent{
    constructor(private router: Router){}
    route5(){
        this.router.navigateByUrl('/icse5')
    }
    route6(){
        this.router.navigateByUrl('/icse6')
    }
    route7(){
        this.router.navigateByUrl('/icse7')
    }
    route8(){
        this.router.navigateByUrl('/icse8')
    }
    route9(){
        this.router.navigateByUrl('/icse9')
    }
    route10(){
        this.router.navigateByUrl('/icse10')
    }
}