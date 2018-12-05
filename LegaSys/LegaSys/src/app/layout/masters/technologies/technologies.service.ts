import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { TechnologiesModel } from './technologies.component';

@Injectable({
    providedIn: 'root'
})
export class TechnologiesService {

    baseUrl: string = 'http://localhost:58164/technology/';

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

    getAllTechnologies() {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() })
    }

    changeStatus(id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() })
    }

    createTechnology(technology: TechnologiesModel) {
        return this.http.post(this.baseUrl + "create", technology, { headers: this.getToken() })
            .pipe(
                map(res => res),
                catchError(this.errorHandler)
            );
    }

    updateTechnology(technology: TechnologiesModel) {
        return this.http.post(this.baseUrl + "update", technology, { headers: this.getToken() })
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
