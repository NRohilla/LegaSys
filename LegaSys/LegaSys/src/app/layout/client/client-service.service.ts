import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import{Client, ClientProject} from './model/client.model';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  
  currentClientDetails:object;
    // This is the client API URL
    URL = environment.BaseAPIURL;
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
      debugger;
      return this.http.get<Client[]>(this.URL +'/Client/GetAllClient', { headers: this.CreateHeader() });

  }
   GetDetailsOfClientwhoseID(ID){
       return this.http.get<Client>(this.URL +'/Client/GetClientById/'+ID,{ headers: this.CreateHeader() });

  }
  AddClientDetails(client: Client)
  {

      return this.http.post(this.URL +'/Client/AddClientDetails',client,{ headers: this.CreateHeader() });

  }
  UpdateDetailsWithID(client: Client){   
    
      return this.http.put(this.URL +'/Client/UpdateClientDetails',client,{ headers: this.CreateHeader() });
  }
  DeleteClient(ID){
      return this.http.delete(this.URL +'/Client/DeleteClientById/'+ID,{ headers: this.CreateHeader() });
  }
  GetClientAllProject(ID:number){
      return this.http.get(this.URL +'/Client/GetProjectsByClientId/'+ID,{ headers: this.CreateHeader() });
  }
  UpdateClientProjectWithId(projectDetails:ClientProject){
    debugger;
      return this.http.put(this.URL +'/Client/UpdateProjectDetailsWithId',projectDetails,{ headers: this.CreateHeader() });

  }
  ActivateClienthavingId(ID:number){
      return this.http.get(this.URL +'/Client/updateClientStatus/'+ID,{ headers: this.CreateHeader() });
  }
 
 
}
