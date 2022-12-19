import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage-module/home-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavBarComponent } from './navbar-module/navbar.component';
import { SignComponent } from './signinup-page-module/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { SignService } from './signinup-page-module/sign.service';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { Cbse5Component } from './content-page-module/cbse5-module/cbse5.component';
import { Cbse6Component } from './content-page-module/cbse6-module/cbse6.component';
import { Cbse7Component } from './content-page-module/cbse7-module/cbse7.component';
import { Cbse8Component } from './content-page-module/cbse8-module/cbse8.component';
import { Cbse9Component } from './content-page-module/cbse9-module/cbse9.component';
import { Cbse10Component } from './content-page-module/cbse10-module/cbse10.component';
import { Icse5Component } from './content-page-module/icse5-module/icse5.component';
import { Icse6Component } from './content-page-module/icse6-module/icse6.component';
import { Icse7Component } from './content-page-module/icse7-module/icse7.component';
import { Icse8Component } from './content-page-module/icse8-module/icse8.component';
import { Icse9Component } from './content-page-module/icse9-module/icse9.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SignComponent,
    Cbse5Component,
    Cbse6Component,
    Cbse7Component,
    Cbse8Component,
    Cbse9Component,
    Cbse10Component,
    Icse5Component,
    Icse6Component,
    Icse7Component,
    Icse8Component,
    Icse9Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [SignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
