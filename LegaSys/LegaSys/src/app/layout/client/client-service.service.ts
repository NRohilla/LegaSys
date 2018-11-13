import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{Client} from './model/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  currentClientDetails:object;
  // This is the client API URL
  URL="http://localhost:58164/api/client";

  constructor(private http: HttpClient) { }

// this function is used to fectch the details of all client present in database using get request 
  GetClientDetails(){
    return this.http.get(this.URL);

  }
   GetDetailsOfClientwhoseID(ID){
    return this.http.get(this.URL+'/'+ID);

  }
  AddClientDetails(client: Client)
  {

    return this.http.post(this.URL,client);

  }
  UpdateDetailsWithID(client: Client){
    return this.http.put(this.URL,client);
  }
  DeleteClient(ID){
    return this.http.delete(this.URL+'/'+ID);
  }
 
}
