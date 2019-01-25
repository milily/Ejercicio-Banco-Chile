import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DummyDataService {

  constructor(
    private http: HttpClient,
  ) {}

  /** This reads the JSON file */
  getUserData(): Observable<any> {
    return this.http.get('assets/data/db.json').pipe(map(resp => resp));
  }
}
