import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DummyData } from '../interfaces/dummy-data.interface';


@Injectable()

export class DummyDataService {

  data: DummyData;

  constructor(
    private http: HttpClient,
  ) {
    // this reads JSON file
    this.http.get('assets/data/db.json')
      .subscribe( (resp: DummyData) => {
        this.data = resp;
        console.log(resp);
      });
   }
}
