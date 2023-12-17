import { Injectable, inject } from '@angular/core';
import { MyOtherServiceService } from './my-other-service.service';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  myOtherService = inject(MyOtherServiceService);
  method1() {
    return this.myOtherService.hello() + ' from other ';
  }
}
