import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {
    console.log('test service constructor');
   }

   getTestData() {
     return this.http.get('/test-api/config');
   }

   getRandomValue() {
     return this.http.get<any>('/test-api/rand')
     .pipe(map(x => x.val));
   }
}
