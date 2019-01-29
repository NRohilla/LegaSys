import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { Shift } from './shifts.component';

@Injectable({
    providedIn: 'root'
})
export class ShiftsService {

    baseUrl: string = 'http://localhost:58164/shift/';

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

    getAllShifts() {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() })
    }

    changeStatus(id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() })
    }

    createShift(shift: Shift) {
        return this.http.post(this.baseUrl + "create", shift, { headers: this.getToken() })
        .pipe(
            map(res=>res),
            catchError(this.errorHandler)
        );
    }

    updateShift(shift: Shift) {
        return this.http.post(this.baseUrl + "update", shift, { headers: this.getToken() })
        .pipe(
            map(res=>res),
            catchError(this.errorHandler)
        );
    }

    errorHandler(error: Response) {
        console.log(error);
        return throwError(error);
    }

}
