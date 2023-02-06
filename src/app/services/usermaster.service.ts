import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserMaster } from 'src/app/model/UserMaster';

@Injectable({
  providedIn: 'root'
})
export class UsermasterService {
  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:33115/api/UserMaster';

  GetAllUser():Observable<UserMaster[]> {
    return this.http.get<UserMaster[]>(this.apiurl);
  }

  GetUserbyId(UserId: any) {
    return this.http.get(this.apiurl + '/' + UserId);
  }

  RemoveUser(UserId: any) {
    return this.http.delete(this.apiurl + '/' + UserId);
  }


  UpdateUser(inputdata: any) {
    return this.http.post(this.apiurl + '/ActivateUser', inputdata);
  }

  GetAllRoles(){
    return this.http.get("http://localhost:33115/api/Login/GetAllRole");
  }


}
