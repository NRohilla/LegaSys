import { Injectable, Component, OnInit, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpClientModule, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
//import { Project } from '../project/projenctModel';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    dialogData: any;
    headers: any;
    url: string = "";
    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
        this.url = environment.BaseAPIURL;
    }

    CreateHeader() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
    }

    public getAllProject() {
        //const headers = new Headers();
        //headers.append(this.storage.get('UserToken').access_token, '');
        //return this.http.get(this.url+'/project/getall', this.headers);
        return this.http.get(this.url+'/project/getall');
    }
    public addProject(issue: any) {
        //return this.http.post(this.url +'/project/create', issue, this.headers);
        return this.http.post(this.url +'/project/create', issue);
    }


    public GetProjectById(id) {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        //return this.http.get(this.url +'/project/' + id, this.headers);
        return this.http.get(this.url +'/project/' + id);
    }
    public DeletProject(id) {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/project/' + id + '/delete', this.headers);
        return this.http.get(this.url +'/project/' + id + '/delete');
    }
    public GetClient() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/client/GetAllClient', this.headers);
        return this.http.get(this.url +'/client/GetAllClient');
    }


    public getallclientstatus() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/api/Client/GetAllClientStatus', this.headers);
        return this.http.get(this.url +'/api/Client/GetAllClientStatus');
    }
    public getallshift() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/shift/getall', this.headers);
        return this.http.get(this.url +'/shift/getall');
    }
    public getalllocation() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/location/getall', this.headers);
        return this.http.get(this.url +'location/getall');
    }
    public getallreportinghead() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/resource/getall', this.headers);
        return this.http.get(this.url +'resource/getall');
    }
    public getallrole() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/role/getall', this.headers);
        return this.http.get(this.url +'role/getall');
    }

    //new
    public getalltechdomains() {
        // debugger;
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/project/GetAllTechDomains', this.headers);
        return this.http.get(this.url +'/project/GetAllTechDomains');
    }


    public updateProject(issue: any) {
        // debugger;
        // console.log(issue);
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.post(this.url +'/project/update', issue, this.headers);
        return this.http.post(this.url +'/project/update', issue);
    }

    public getAllResourceOnProject(projectid: any) {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/project/getallresourceonproject/' + projectid, this.headers);
        return this.http.get(this.url +'/project/getallresourceonproject/'+ projectid);
    }
    public RemoveResource(project: any) {
        //debugger;
        //return this.http.post(this.url +'/project/removeresource/', project, this.headers);
        return this.http.post(this.url +'/project/removeresource/', project);
    }
    public getAvailableResourceOnProject(id: any) {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.post(this.url +'/LegaSysAPI/Users/getavailableresource', id, this.headers);
        return this.http.post(this.url +'/LegaSysAPI/Users/getavailableresource', id);
    }
    public mapResourceOnProject(project: any) {
        // debugger;
        // console.log("shared service :" + JSON.stringify(project));
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.post(this.url +'/project/mapresource', project, this.headers);
        return this.http.post(this.url +'/project/mapresource', project);
    }
    public getalltaskofproject(projectid: any) {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/project/getalltaskofproject/' + projectid, this.headers);
        return this.http.get(this.url +'/project/getalltaskofproject/' + projectid);

    }

    public GetAllActiveClient() {
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
        // return this.http.get(this.url +'/client/GetAllActiveClient', this.headers);
        return this.http.get(this.url +'/client/GetAllActiveClient');
    }
    //public GetAllActiveClient(){
    //    const headers = new Headers();
    //    headers.append(this.storage.get('UserToken').access_token, '');
    //    return this.http.get('http://localhost:58164/client/GetAllActiveClient', this.headers);
    //}

}


