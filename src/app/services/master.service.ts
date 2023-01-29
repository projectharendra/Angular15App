import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,tap } from 'rxjs';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiurl = 'http://localhost:33115/api/Employee';
  constructor(private http: HttpClient) {  }

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }
  
  GetEmployee(): Observable<Employee> {
    return this.http.get<Employee>(this.apiurl);
  }
}