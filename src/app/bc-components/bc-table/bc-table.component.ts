import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../services/dummy-data.service';
import { DummyData } from '../../interfaces/dummy-data.interface';

@Component({
  selector: 'bc-table',
  templateUrl: './bc-table.component.html',
  styleUrls: ['bc-table.component.scss'],
})

export class BcTableComponent implements OnInit {

  dataService: DummyData[];

  constructor(
    public _dataService: DummyDataService,
  ) { }

  ngOnInit() {

    // shows the data in the template from service
    this._dataService.getUserData().subscribe(data => this.dataService = data);
  }
}

