import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Client } from '../client/model/client.model';
import { TaskModel } from '../tasks/tasks.component';
import { environment } from '../../../environments/environment';

import { Resource } from '../resource/resource.model';



@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  
  currentClientDetails:object;
 

  baseUrl = environment.BaseAPIURL; 

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) { }
  CreateHeader(){
   
    let token = this.storage.get('UserToken');
    if (token != null) {
        var accessToken = 'Bearer ' + token.access_token;
        let accessHeader = new HttpHeaders();
        accessHeader = accessHeader.append('Authorization', accessToken);
        return accessHeader;
    }
  }

/*************** Created By Shubham Mishra on 8-Nov-2018  *********
 * **********    Following fuction are used to call web API and perform respective fuction */ 

  GetClientDetails(){   
      
    return this.http.get<Client[]>(this.baseUrl+'/client/GetAllClient', { headers: this.CreateHeader() });

  }

  GetAllProjectsTask() 
  {

    return this.http.get<TaskModel[]>(this.baseUrl +'/task/getall', { headers: this.CreateHeader() })
}

GetResourceDetails(){
  debugger;
 return this.http.get<Resource[]>(this.baseUrl+'/resource/GetAllResource', { headers: this.CreateHeader() });
}
   
 
 
}
