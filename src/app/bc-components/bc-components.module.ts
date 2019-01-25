import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Módulos UI  */
import { BcHeaderComponent } from './bc-header/bc-header.component';
import { BcTableComponent } from './bc-table/bc-table.component';
import { DummyDataService } from '../services/dummy-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      HttpClientModule
    ],
    declarations: [
      BcHeaderComponent,
      BcTableComponent
    ],
    exports: [
      BcHeaderComponent,
      BcTableComponent
    ],
    providers: [
      DummyDataService
    ]
})

export class BcComponentsModule { }
