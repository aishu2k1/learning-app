import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavBarComponent{
    loggedIn: boolean=false
    constructor(private router: Router){

    }

    routesign(){
        this.router.navigateByUrl('/sign')
    }
    
    
}