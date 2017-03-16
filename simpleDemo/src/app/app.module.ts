import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home";

@NgModule({
    imports:      [ BrowserModule ],
  //  providers:    [ Logger ],
    declarations: [ AppComponent, HomeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }