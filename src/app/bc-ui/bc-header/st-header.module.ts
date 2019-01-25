import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BcHeaderComponent } from './bc-header.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BcHeaderComponent
  ],
  exports: [
    BcHeaderComponent
  ],
  providers: []
})

export class BcHeaderModule { }
