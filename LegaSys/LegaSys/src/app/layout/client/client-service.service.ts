import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import{Client} from './model/client.model';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  
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
   GetDetailsOfClientwhoseID(ID){
    return this.http.get<Client>(this.URL+'GetClientById/'+ID,{ headers: this.CreateHeader() });

  }
  AddClientDetails(client: Client)
  {

    return this.http.post(this.URL+'AddClientDetails',client,{ headers: this.CreateHeader() });

  }
  UpdateDetailsWithID(client: Client){   
    
    return this.http.put(this.URL+'UpdateClientDetails',client,{ headers: this.CreateHeader() });
  }
  DeleteClient(ID){
    return this.http.delete(this.URL+'DeleteClientById/'+ID,{ headers: this.CreateHeader() });
  }
 
}
