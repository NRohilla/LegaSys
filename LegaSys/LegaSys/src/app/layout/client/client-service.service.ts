import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Client, ClientProject } from './model/client.model';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {


  currentClientDetails: object;
  // This is the client API URL
  URL = environment.BaseAPIURL;
   userDetailsID=parseInt(localStorage.getItem('userDetailsID'));
  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) { }
  CreateHeader() {

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

  GetClientDetails() {
    debugger;
    return this.http.get<Client[]>(this.URL + '/Client/GetAllClient'); // get All client 

  }
  GetDetailsOfClientwhoseID(ID) {
    return this.http.get<Client>(this.URL + '/Client/GetClientById/' + ID); // get client with ID

  }
  AddClientDetails(client: Client) {
    client.Created_By=this.userDetailsID;
    client.Updated_By=this.userDetailsID;

    return this.http.post(this.URL + '/Client/AddClientDetails', client ); // Add new client 

  }
  UpdateDetailsWithID(client: Client) {
       return this.http.put(this.URL + '/Client/UpdateClientDetails', client); // update perticular client 
  }
  DeleteClient(ID) {
      return this.http.delete(this.URL + '/Client/DeleteClientById?Id='+ID+'&userId='+this.userDetailsID); // delete perticular client    
  }
  GetClientAllProject(ID: number) {
    return this.http.get(this.URL + '/Client/GetProjectsByClientId/' + ID); // get all project of perticular client 
  }
  UpdateClientProjectWithId(projectDetails: ClientProject) {
      return this.http.put(this.URL + '/Client/UpdateProjectDetailsWithId', projectDetails); // update project details of a perticular client 
  }
  ActivateClienthavingId(ID: number) {
    debugger;
       return this.http.get(this.URL + '/Client/updateClientStatus?Id='+ID+'&userId='+this.userDetailsID);  // activating a client 
  }


}
