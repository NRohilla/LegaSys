import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { throwError, Observable, pipe } from 'rxjs';
import { filter, map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  authenticateUser(userName: string, password: string): Observable<any> {
     debugger;
      // var data = "username=" + userName + "&password=" + password + "&grant_type=password";
      // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
      // console.log(data);
      // console.log(reqHeader);
      // console.log("url= "+environment.BaseAPIURL+ '/api' + '/token');
      // return this._httpClient.post(environment.BaseAPIURL + '/api' + '/token', data, { headers: reqHeader });
      return this._httpClient.get(environment.BaseAPIURL + '/LegaSysAPI/Users/AuthenticateLogin?UserEmailId='+userName+'&password='+password );
  }

  //to test the call to the API hosted....
  test(){
    return this._httpClient.get('http://172.16.200.33:9393/LegaSys/Services/LegaSysAPI/Users/getuserlist/10');
  }
}
