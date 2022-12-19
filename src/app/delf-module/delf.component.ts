import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'delf',
    templateUrl: './delf.component.html',
    styleUrls: ['./delf.component.css']
})
export class DelfComponent{
    constructor(private router: Router){}
    routeA1(){
        this.router.navigateByUrl('/tbu')
    }
    routeA2(){
        this.router.navigateByUrl('/tbu')
    }
    routeB1(){
        this.router.navigateByUrl('/tbu')
    }
    routeB2(){
        this.router.navigateByUrl('/tbu')
    }
}