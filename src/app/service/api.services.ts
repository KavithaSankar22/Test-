
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private url = "https://reqres.in/api/users";
  constructor(private httpClient: HttpClient) { }

  create(model: User): Observable<any> {
    const header = { "content-type": 'application/json' };
    var json = JSON.stringify(model);
    var create = this.httpClient.post(this.url, json, { 'headers': header });
    return create;
  }
  update(model: User, id: number): Observable<any> {
    const header = { "content-type": 'application/json' };
    var json = JSON.stringify(model);
    var update = this.httpClient.put(this.url + "/" + id, json, { 'headers': header });
    return update;
  }
delete(id: number): Observable<any>
 {
  const header = { "content-type": 'application/json' };
   return  this.httpClient.delete(this.url + "/" + id,{ 'headers': header });
   
}
}