import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  public url = 'http://ec2-54-158-130-38.compute-1.amazonaws.com:8080/';

  constructor(private http: HttpClient) { }

  public getAllProyects() {
    const uri = this.url + 'get/persona';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    return this.http.post(uri, { id: '5d9560482d4d1f216a6c2a02' }, httpOptions ).pipe( map(res => {
      console.log(res);
      return res;
    }));
  }
}
