import { Injectable, Component, OnInit, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpClientModule, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Project } from '../project/projenctModel';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    dialogData: any;
    headers: any;
    url: 'http://localhost:58164/project';
    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
    }

    // CreateHeader() {
    //     const  headers = new Headers();
    //     headers.append(this.storage.get('UserToken').access_token, '');
    //     }
    CreateHeader() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');

    }


    public getAllProject() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        //  return  this.http.get(this.url + 'getall', { header : this.CreateHeader()});
        return this.http.get('http://localhost:58164/project/getall', this.headers);
    }
    public addProject(issue: any) {
        return this.http.post('http://localhost:58164/project/create', issue, this.headers);
    }
    public editProject(issue: any) {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.post('http://localhost:58164/project/update', issue, this.headers);
    }
    public GetProjectById(id) {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/' + id, this.headers);
    }
    public DeletProject(id) {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/' + id + '/delete', this.headers);
    }
    public GetClient() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/api/Client/GetAllClient', this.headers);
    }
    public getalltechnology() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/getalltechnology', this.headers);
    }
    public getallclientstatus() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/api/Client/GetAllClientStatus', this.headers);
    }
    public getallshift() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/shift/getall', this.headers);
    }
    public getalllocation() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/location/getall', this.headers);
    }
    public getallreportinghead() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/resource/getall', this.headers);
    }
    public getallrole() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/role/getall', this.headers);
    }
    public getalltechdomains() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.get('http://localhost:58164/project/gettechdomains', this.headers);
    }
    public updateProject(issue: any) {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        return this.http.post('http://localhost:58164/project/update', issue, this.headers);
    }
}
