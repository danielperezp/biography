import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizedBtnModule } from 'customized-btn';
import { BtnStyleModule } from 'btn-style';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomizedBtnModule,
    BtnStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
