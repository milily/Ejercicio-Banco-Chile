import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DummyData } from '../interfaces/dummy-data.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DummyDataService {

  constructor(
    private http: HttpClient,
  ) {}

   getUserData(): Observable<any> {
      // this reads JSON file
      return this.http.get('assets/data/db.json').pipe(map(resp => resp));
   }
}
