
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Taskmodel } from './taskmodel.model'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { throwError } from 'rxjs';
import { URLSearchParams } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class TaskServiceService {

 
    //headers: any;
    constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
    }
    

    // CreateHeader() {
    //     const headers = new Headers();
    //     headers.append(this.storage.get('UserToken').access_token, '');

    // }
    CreateHeader(){
        debugger;
        let token = this.storage.get('UserToken');
        if (token != null) {
            var accessToken = 'Bearer ' + token.access_token;
            let accessHeader = new HttpHeaders();
            accessHeader = accessHeader.append('Authorization', accessToken);
            return accessHeader;
        }
      }

    
    GetProjectTaskbyId(ID) {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
                
        return this.http.get('http://localhost:58164/task/'+ ID, { headers: this.CreateHeader() })
    }
  

    GetAllProjectsTask(){
        debugger;
        // const headers = new Headers();
        // headers.append(this.storage.get('UserToken').access_token, '');
     
        return this.http.get('http://localhost:58164/task/getall',{ headers: this.CreateHeader() })
    }

    CreateProjectTaskDetail(taskmodel : Taskmodel){
        debugger;
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
            
        return this.http.post<Taskmodel[]>('http://localhost:58164/task/create',taskmodel,{ headers: this.CreateHeader() })
    }

    UpdateProjectTaskDetail(taskmodel : Taskmodel){
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        
            
        return this.http.post<Taskmodel[]>('http://localhost:58164/task/update',taskmodel,{ headers: this.CreateHeader() })
    }
    DeleteProjectTask(){
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
            
        return this.http.get<Taskmodel[]>('http://localhost:58164/LegaSysAPI/task/{id}/delete',{ headers: this.CreateHeader() })
    }
    
    GetAllProjects(){
        debugger;
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
     
        //return this.http.get('http://localhost:58164/project/getall', this.headers)
        return this.http.get('http://localhost:58164/project/getall', { headers: this.CreateHeader() })
    }    

    public GetAllClients() {
        const headers = new Headers();
        headers.append(this.storage.get('UserToken').access_token, '');
        //return this.http.get('http://localhost:58164/client/GetAllClient', this.headers);
        return this.http.get('http://localhost:58164/client/GetAllClient', { headers: this.CreateHeader() });
    }

    
    
    errorHandler(error:Response){
        console.log(error);
        return throwError(error);
    }
   


}
