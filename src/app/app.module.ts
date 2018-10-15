import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";

import { WjGaugeModule } from 'wijmo/wijmo.angular2.gauge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, WjGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }