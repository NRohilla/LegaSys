import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Injectable({
    providedIn: 'root'
})
export class ShiftsService {

    baseUrl: string = 'http://localhost:58164/shift/getall';

    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService,
    ) { }

    getAllShifts() {
        var token = this.storage.get('UserToken');
        let headerss = new HttpHeaders();
        headerss = headerss.append('Authorization', 'bearer ' + token.access_token);
        return this.http.get(this.baseUrl, { headers: headerss })
    }

}
