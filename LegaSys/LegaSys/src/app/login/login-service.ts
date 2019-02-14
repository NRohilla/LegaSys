import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {
    constructor(private _httpClient: HttpClient) {
    }

    authenticateUser(userName: string, password: string): Observable<any> {
        console.log('Services invoked with URL' + environment.BaseAPIURL);
        console.log('Complete URL' + environment.BaseAPIURL + '/api' + '/token' + ' with this data ' + "username=" + userName + "&password=" + password + "&grant_type=password");
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this._httpClient.post(environment.BaseAPIURL + '/api' + '/token', data, { headers: reqHeader });
    }
}
