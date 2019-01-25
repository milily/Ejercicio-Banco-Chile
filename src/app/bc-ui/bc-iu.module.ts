import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Módulos UI  */
import { BcHeaderModule } from './bc-header/st-header.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      BcHeaderModule
    ],
    declarations: [],
    exports: [
        BcHeaderModule
    ]
})

export class BcUIModule { }
