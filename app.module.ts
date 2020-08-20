import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Wonder1Component } from './wonder1/wonder1.component';
import { Wonder2Component } from './wonder2/wonder2.component';
import { Wonder3Component } from './wonder3/wonder3.component';
import { Wonder4Component } from './wonder4/wonder4.component';
import { Wonder5Component } from './wonder5/wonder5.component';
import { Wonder6Component } from './wonder6/wonder6.component';
import { Wonder7Component } from './wonder7/wonder7.component';

@NgModule({
  declarations: [
    AppComponent,
    Wonder1Component,
    Wonder2Component,
    Wonder3Component,
    Wonder4Component,
    Wonder5Component,
    Wonder6Component,
    Wonder7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
