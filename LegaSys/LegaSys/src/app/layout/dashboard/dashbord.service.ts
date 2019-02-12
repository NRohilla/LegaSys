import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Client } from '../client/model/client.model';



@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  
  currentClientDetails:object;
  // This is the client API URL
  URL="http://localhost:58164/client/";
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
      
    return this.http.get<Client[]>(this.URL+'GetAllClient', { headers: this.CreateHeader() });

  }
   
 
 
}
