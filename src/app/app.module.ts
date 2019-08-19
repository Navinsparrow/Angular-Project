import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparrowComponent } from './sparrow/sparrow.component';
import { Sparrow2Component } from './sparrow2/sparrow2.component';

@NgModule({
  declarations: [
    AppComponent,
    SparrowComponent,
    Sparrow2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
