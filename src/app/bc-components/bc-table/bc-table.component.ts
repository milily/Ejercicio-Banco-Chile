import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../services/dummy-data.service';

@Component({
  selector: 'bc-table',
  templateUrl: './bc-table.component.html',
})

export class BcTableComponent implements OnInit {

  constructor(
   private _dataService: DummyDataService,
  ) { }

  ngOnInit() {
  }
}

