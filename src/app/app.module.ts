import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BcComponentsModule } from './bc-components/bc-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BcComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
