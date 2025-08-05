import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  onRoleChange$ : Subject<string> = new Subject<string>
  constructor(private http : HttpClient) { }
}
