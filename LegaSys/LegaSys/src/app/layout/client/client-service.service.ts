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
  URL="http://localhost:58164/api/client";
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

// this function is used to fectch the details of all client present in database using get request 

  GetClientDetails(){   
      
    return this.http.get(this.URL, { headers: this.CreateHeader() });

  }
   GetDetailsOfClientwhoseID(ID){
    return this.http.get(this.URL+'/'+ID,{ headers: this.CreateHeader() });

  }
  AddClientDetails(client: Client)
  {

    return this.http.post(this.URL,client,{ headers: this.CreateHeader() });

  }
  UpdateDetailsWithID(client: Client){
    return this.http.put(this.URL,client,{ headers: this.CreateHeader() });
  }
  DeleteClient(ID){
    return this.http.delete(this.URL+'/'+ID,{ headers: this.CreateHeader() });
  }
 
}
