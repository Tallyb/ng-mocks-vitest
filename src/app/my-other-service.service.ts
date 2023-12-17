import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyOtherServiceService {

  constructor() { }

  hello() {
    return 'Hello';
  }
}
