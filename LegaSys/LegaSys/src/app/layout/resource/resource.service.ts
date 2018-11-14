import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Resource } from './resource.model'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {

    //baseUrl: string = 'http://localhost:58164/resource/getall';

    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService,
    ) { }

    getToken(){
        var token = this.storage.get('UserToken');       
        if (token != null) {
        //var atoken = token.access_token;        
        var bearerToken = 'Bearer ' + token.access_token;                               
        let newHeaders = new HttpHeaders();
        newHeaders = newHeaders.append('Authorization', bearerToken); 
        return newHeaders;  
    }
    }
    getResource() {
                
        return this.http.get('http://localhost:58164/resource/getall', { headers:this.getToken() })
    }
  

    getLocation(){
        debugger;
            
        return this.http.get<Resource[]>('http://localhost:58164/location/getall', { headers: this.getToken() })
    }

    getShift(){
        debugger;
            
        return this.http.get<Resource[]>('http://localhost:58164/shift/getall', { headers: this.getToken() })
    }

    getRoles(){
        debugger;
            
        return this.http.get<Resource[]>('http://localhost:58164/role/getall', { headers: this.getToken() })
    }
    getReportingHead(){
        debugger;
            
        return this.http.get<Resource[]>('http://localhost:58164/LegaSysAPI/Users/getuserlist')
    }
    // getResource(){
    //   return this.http.get<Resource[]>(this.baseUrl);
    // }


    // getResourceById(UserId: number) {
    //     return this.http.get<Resource[]>(this.baseUrl + '/' + UserId);
    // }

    // addResource(resource: Resource) {
    //     return this.http.post(this.baseUrl, resource);
    // }
    // updateResource(resource: Resource) {
    //     return this.http.put(this.baseUrl + '/' + resource.UserDetailID, resource);
    // }
    // deleteResource(UserId: number) {
    //     return this.http.delete<Resource[]>(this.baseUrl + UserId)
    // }


}
