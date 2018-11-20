import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map, catchError } from 'rxjs/operators';
import { Resource } from './resource.model'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    currentresoursedetails: any;
    baseUrl: string = 'http://localhost:58164/resource/getall';

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
    getResource() {
        debugger;
        return this.http.get('http://localhost:58164/resource/getall', { headers: this.getToken() })
    }

    getResourceById(UserId: number) {
        return this.http.get<Resource[]>('http://localhost:58164/resource/' + UserId, { headers: this.getToken() });
    }

    getLocation() {
        return this.http.get<Resource[]>('http://localhost:58164/location/getall', { headers: this.getToken() })
    }

    getShift() {
        return this.http.get<Resource[]>('http://localhost:58164/shift/getall', { headers: this.getToken() })
    }

    getRoles() {
        return this.http.get<Resource[]>('http://localhost:58164/role/getall', { headers: this.getToken() })
    }

    getReportingHead(id) {
        return this.http.get<Resource[]>('http://localhost:58164/LegaSysAPI/Users/getuserlist/' + id)
    }

    addResource(resource: Resource) {
        return this.http.post('http://localhost:58164/resource/create', resource, { headers: this.getToken() })
            .pipe(
                map(res => res),
                catchError(this.errorHandler)
            );
    }

    errorHandler(error: Response) {
        console.log(error);
        return throwError(error);
    }

    updateResource(resource: Resource) {
        debugger;
        return this.http.post('http://localhost:58164/resource/update' , resource, { headers: this.getToken() });
    }

    deleteResource(UserId: number) {
        return this.http.delete<Resource[]>(this.baseUrl + UserId)
    }

    getRole() {
        return this.http.get<Resource>('http://localhost:58164/role/getall', { headers: this.getToken() })
    }

    getAllShift() {
        return this.http.get<Resource>('http://localhost:58164/shift/getall', { headers: this.getToken() })
    }

    getAllLocation() {
        return this.http.get<Resource>('http://localhost:58164/location/getall', { headers: this.getToken() })
    }

}
