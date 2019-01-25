import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DummyDataService {

  constructor(
    private http: HttpClient,
  ) {
    // this reads JSON file
    this.http.get('assets/data/db.json')
      .subscribe( resp => {
        console.log(resp);
      });
   }
}
