import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  onRoleChange$ : Subject<string> = new Subject<string>
  url="https://api.restful-api.dev/objects";
  loginUrl="https://api.escuelajs.co/api/v1/auth/login";
  constructor(private http : HttpClient) { 
 
  }
  getData():Observable<any>{
    return this.http.get(this.url)
  }
  postLoginData(loginData:any):Observable<any>{
    return this.http.post(this.loginUrl,loginData)
  }
}


