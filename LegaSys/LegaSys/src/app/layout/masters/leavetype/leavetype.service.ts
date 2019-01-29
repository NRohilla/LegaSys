import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { LeavetypeModel } from './leavetype.component';

@Injectable({
    providedIn: 'root'
})
export class LeavetypeService {

    baseUrl: string = 'http://localhost:58164/leavetype/';

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

    getAllLeavetype() {
        return this.http.get<LeavetypeModel[]>(this.baseUrl + "getall", { headers: this.getToken() })
    }

    getAllActiveLeavetype() {
        return this.http.get<LeavetypeModel[]>(this.baseUrl + "getallactive", { headers: this.getToken() })
    }

    changeStatus(id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() })
    }

    createLeavetype(leavetype: LeavetypeModel) {
        return this.http.post(this.baseUrl + "create", leavetype, { headers: this.getToken() })
            .pipe(
                map(res => res),
                catchError(this.errorHandler)
            );
    }

    updateLeavetype(leavetype: LeavetypeModel) {
        return this.http.post(this.baseUrl + "update", leavetype, { headers: this.getToken() })
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
