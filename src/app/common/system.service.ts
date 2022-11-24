import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {


baseurl: string = "http://localhost:5555/api";

  constructor() { }
}
