import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';
import { HttpClientModule } from '@angular/common/http';
import { PlusComponent } from './plus/plus.component';
import { AccordiannewComponent } from './accordiannew/accordiannew.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    PlusComponent,
    AccordiannewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
