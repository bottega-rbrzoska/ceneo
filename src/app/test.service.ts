import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {
    console.log('test service constructor');
   }

   getTestData() {
     return this.http.get('http://localhost:3000/test');
   }

   getRandomValue() {
     return this.http.get<any>('http://localhost:3001')
     .pipe(map(x => x.val));
   }
}
