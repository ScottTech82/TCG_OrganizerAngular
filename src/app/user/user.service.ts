import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = `${this.sys.baseurl}/users`;


  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { }

list(): Observable<User[]> {
  return this.http.get(`${this.baseurl}`) as Observable<User[]>;
}
get(id: number): Observable<User> {
  return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
}
create(user: User): Observable<User> {

}
change(user: User): Observable<any> {

}
remove(id: number): Observable<any> {

}


}
