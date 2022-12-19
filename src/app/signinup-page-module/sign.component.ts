import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {FormControl, NgForm, Validators} from '@angular/forms';
import { SignService } from "./sign.service";

@Component({
    selector: 'sign',
    templateUrl: 'sign.component.html',
    styleUrls: ['sign.component.css']
})
export class SignComponent {
    signup:boolean
    fname:string
    lname:string
    email:string
    uname:string
    lpassword:string
    subform1:NgForm
    subform2:NgForm
    msg1=""
    msg2="" 
    signed=false
    constructor(private router: Router, private signService: SignService){
        
    }
    submitted(f:NgForm){
        if(this.signup){
            this.createUser(f)
        }
        else{
            this.login(f)
        }
    }
    createUser(f:NgForm){
        console.log(f.value)
        this.signService.newUser(f.value, "http://localhost:8080/sign").subscribe((response: any) => {
            if(response=="User with the given email already exists"){
                this.msg1="User with the given email already exists"
            }
            else{
                // this.sign.emit("change")
                this.router.navigateByUrl('/home')
            }
            console.log(response);
        })
    }

    login(f:NgForm){
        this.signService.loginUser(f.value, "http://localhost:8080/signin").subscribe((response: any) => {
        if(response=="Username does not exist"){
            this.msg2="Username does not exist"
        }    
        else if(response=="Enter correct password"){
            this.msg2="Enter correct password"
        } 
        else{
            this.signed=true
            // this.sign.emit("changed")
            this.router.navigateByUrl('/home')
        }
        console.log(response);
        })
    }
    ngOnInit(){
        if(this.router.url==='/signin'){
            this.signup=false
        }
        else{
            this.signup=true
        }
    }

    changesign(){
        this.signup=!this.signup
        console.log(this.signup)
        if(this.signup){
            this.router.navigateByUrl('/sign')
        }
        else{
            this.router.navigateByUrl('/signin')
        }
    }    

    loggedin(){
        return this.signed
    }
}