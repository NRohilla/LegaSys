import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map, catchError } from 'rxjs/operators';
import { Resource } from './resource.model'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError, Observable } from 'rxjs';
import { UserBackgrnd } from './components/resource.backgrounddetails.component';
import { Qualification } from './components/resource.qualification.component';
import { ResourceProject } from './components/resource.allocation.component';
import { skillset } from './components/resource.skillset.component';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    currentresoursedetails: any;
    baseUrl= environment.BaseAPIURL; 
    totalservice:any;
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
        return this.http.get(this.baseUrl + '/resource/getall', { headers: this.getToken() })
    }

    getResourceById(UserId: number) {
        debugger;
        return this.http.get<Resource>(this.baseUrl +'/resource/'+UserId, { headers: this.getToken() });
    }

    getLocation() {
        return this.http.get<Resource[]>(this.baseUrl+'/location/getallactive', { headers: this.getToken() })
    }

    getShift() {
        return this.http.get<Resource[]>(this.baseUrl +'/shift/getallactive', { headers: this.getToken() })
    }

    getRoles() {
        return this.http.get<Resource[]>(this.baseUrl +'/role/getallactive', { headers: this.getToken() })
    }

    getReportingHead(id) {
        return this.http.get<Resource[]>(this.baseUrl +'/LegaSysAPI/Users/getuserlist/' + id)
    }

    addResource(resource: Resource) {
        debugger;
        return this.http.post(this.baseUrl + '/resource/create', resource, { headers: this.getToken() })
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
        return this.http.post(this.baseUrl + '/resource/update', resource, { headers: this.getToken() });
    }

    deleteResource(id) {
        return this.http.get(this.baseUrl + '/resource/delete/' + id)
    }

    getRole() {
        return this.http.get<Resource>(this.baseUrl +'/role/getallactive', { headers: this.getToken() })
    }

    getAllShift() {
        return this.http.get<Resource>(this.baseUrl +'/shift/getallactive', { headers: this.getToken() })
    }

    getAllLocation() {
        return this.http.get<Resource>(this.baseUrl +'/location/getallactive', { headers: this.getToken() })
    }

    getBackGroundDetails(id, exp: boolean = true) {

        return this.http.get<UserBackgrnd[]>(this.baseUrl +'/resource/getuserbackground/' + id, { headers: this.getToken() })
    }
    AddUserBackGound(id: number, isExp: boolean, background: UserBackgrnd[]) {
debugger;
        console.log(background);
        return this.http.post(this.baseUrl +'/resource/createbackground/' + id + '?isExp=' + isExp, background, { headers: this.getToken() })
    }
    getUserQualification(id: number) {
        debugger;
        return this.http.get<Qualification[]>(this.baseUrl +'/resource/getuserqualification/' + id, { headers: this.getToken() })
    }
    getUserCertification(id: number) {
        return this.http.get<Qualification[]>(this.baseUrl +'/resource/getusercertification/' + id, { headers: this.getToken() })
    }
    AddUserQualification(id: number, educationModel: Qualification[]) {
        return this.http.post(this.baseUrl +'/resource/createqualification/' + id, educationModel, { headers: this.getToken()  })
    }
    GetResourceProject(id:number){
        return this.http.get<ResourceProject[]>(this.baseUrl +'/resource/getResourceProject/'+id, {headers:this.getToken() })
    }
    CheckEmail(email:string){
        debugger;
        return this.http.post(this.baseUrl +'/resource/checkemail?email='+email,{headers:this.getToken()});
    }
    AddSkillset(skill:Resource){
        debugger;
        return this.http.post(this.baseUrl +'/resource/addskillbyid',skill,{headers:this.getToken()});
    }
}
