import { Routes } from "@angular/router"
import { CbseComponent } from "./cbse-module/cbse.component"
import { Cbse10Component } from "./content-page-module/cbse10-module/cbse10.component"
import { Cbse5Component } from "./content-page-module/cbse5-module/cbse5.component"
import { Cbse6Component } from "./content-page-module/cbse6-module/cbse6.component"
import { Cbse7Component } from "./content-page-module/cbse7-module/cbse7.component"
import { Cbse8Component } from "./content-page-module/cbse8-module/cbse8.component"
import { Cbse9Component } from "./content-page-module/cbse9-module/cbse9.component"
import { Icse5Component } from "./content-page-module/icse5-module/icse5.component"
import { Icse6Component } from "./content-page-module/icse6-module/icse6.component"
import { Icse7Component } from "./content-page-module/icse7-module/icse7.component"
import { Icse8Component } from "./content-page-module/icse8-module/icse8.component"
import { Icse9Component } from "./content-page-module/icse9-module/icse9.component"
import { DelfComponent } from "./delf-module/delf.component"
import { HomePageComponent } from "./homepage-module/home-page.component"
import { IcseComponent } from "./icse-module/icse.component"
import { PCComponent } from "./pod&cont-module/pod&cont.component"
import { SignComponent } from "./signinup-page-module/sign.component"
import { ToBeUploadedComponent } from "./tobeuploaded-component"

export const appRoutes:Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'signin', component: SignComponent},
    {path: 'sign', component: SignComponent},
    {path: 'cbse', component: CbseComponent},
    {path: 'icse', component: IcseComponent},
    {path: 'delf', component: DelfComponent},
    {path: 'pc', component: PCComponent},
    {path: 'cbse5', component: Cbse5Component},
    {path: 'cbse6', component: Cbse6Component},
    {path: 'cbse7', component: Cbse7Component},
    {path: 'cbse8', component: Cbse8Component},
    {path: 'cbse9', component: Cbse9Component},
    {path: 'cbse10', component: Cbse10Component},
    {path: 'icse5', component: Icse5Component},
    {path: 'icse6', component: Icse6Component},
    {path: 'icse7', component: Icse7Component},
    {path: 'icse8', component: Icse8Component},
    {path: 'icse9', component: Icse9Component},
    {path: 'tbu', component: ToBeUploadedComponent},
    {path:'', redirectTo: '/home', pathMatch: 'full'}    
]