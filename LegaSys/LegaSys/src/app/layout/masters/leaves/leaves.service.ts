import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { LeaveModel } from './leaves.component';

@Injectable({
    providedIn: 'root'
})
export class LeavesService {

    baseUrl: string = 'http://localhost:58164/leave/';

    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService,
    ) { }

    getToken() {
        var token = this.storage.get('UserToken');
        if (token != null) {
            var bearerToken = 'Bearer ' + token.access_token;
            let newHeaders = new HttpHeaders();
            newHeaders = newHeaders.append('Authorization', bearerToken);
            return newHeaders;
        }
    }

    getAllLeaves() {
        return this.http.get<LeaveModel[]>(this.baseUrl + "getall", { headers: this.getToken() })
    }

    getAllActiveLeaves() {
        return this.http.get<LeaveModel[]>(this.baseUrl + "getallactive", { headers: this.getToken() })
    }

    changeStatus(id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() })
    }

    createLeave(leave: LeaveModel) {
        return this.http.post(this.baseUrl + "create", leave, { headers: this.getToken() })
            .pipe(
                map(res => res),
                catchError(this.errorHandler)
            );
    }

    updateLeave(leave: LeaveModel) {
        return this.http.post(this.baseUrl + "update", leave, { headers: this.getToken() })
            .pipe(
                map(res => res),
                catchError(this.errorHandler)
            );
    }

    errorHandler(error: Response) {
        console.log(error);
        return throwError(error);
    }
}
