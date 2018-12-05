import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { DomainModel } from './domains.component';

@Injectable({
    providedIn: 'root'
})
export class DomainsService {

    baseUrl: string = 'http://localhost:58164/domain/';

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

    getAllDomains() {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() })
    }

    getAllActiveDomains() {
        return this.http.get<DomainModel[]>(this.baseUrl + "getallactive", { headers: this.getToken() })
    }

    changeStatus(id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() })
    }

    createDomain(domain: DomainModel) {
        return this.http.post(this.baseUrl + "create", domain, { headers: this.getToken() })
            .pipe(
                map(res => res),
                catchError(this.errorHandler)
            );
    }

    updateDomain(domain: DomainModel) {
        return this.http.post(this.baseUrl + "update", domain, { headers: this.getToken() })
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
