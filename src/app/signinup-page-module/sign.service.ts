import { Injectable } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SignService{
    constructor(private http: HttpClient){}
    newUser(data:any, url: any){
        return this.http.post<String>(url,data,{responseType: 'text' as 'json'})
    }
    loginUser(data: any, url: any){
        return this.http.post<String>(url,data,{responseType: 'text' as 'json'})
    }
}