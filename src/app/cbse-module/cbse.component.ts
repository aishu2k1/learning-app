import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'cbse',
    templateUrl: './cbse.component.html',
    styleUrls: ['./cbse.component.css']
})
export class CbseComponent{
    constructor(private router: Router){}
    route5(){
        this.router.navigateByUrl('/cbse5')
    }
    route6(){
        this.router.navigateByUrl('/cbse6')
    }
    route7(){
        this.router.navigateByUrl('/cbse7')
    }
    route8(){
        this.router.navigateByUrl('/cbse8')
    }
    route9(){
        this.router.navigateByUrl('/cbse9')
    }
    route10(){
        this.router.navigateByUrl('/cbse10')
    }
}