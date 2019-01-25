import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BcUIModule } from './bc-ui/bc-iu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BcUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
