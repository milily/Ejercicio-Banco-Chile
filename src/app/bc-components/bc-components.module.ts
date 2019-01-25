import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/** View components  */
import { BcHeaderComponent } from './bc-header/bc-header.component';
import { BcTableComponent } from './bc-table/bc-table.component';
import { BcCardComponent } from './bc.card/bc-card.component';
import { BcCollapseComponent } from './bc-collaspse/bc-collapse.component';

/** Services */
import { DummyDataService } from './../services/dummy-data.service';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      HttpClientModule
    ],
    declarations: [
      BcHeaderComponent,
      BcTableComponent,
      BcCardComponent,
      BcCollapseComponent
    ],
    exports: [
      BcHeaderComponent,
      BcTableComponent,
      BcCardComponent,
      BcCollapseComponent
    ],
    providers: [
      DummyDataService
    ]
})

export class BcComponentsModule { }
