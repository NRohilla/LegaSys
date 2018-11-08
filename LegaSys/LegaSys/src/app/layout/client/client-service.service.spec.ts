import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  
  // Created By VE team on 05 Nov 2018
  // This is the client API URL
  URL="http://localhost:58164/api/client";

  constructor(private http: HttpClient) { }

// this function is used to fectch the details of all client present in database using get request 
  GetClientDetails(){
    return this.http.get(this.URL);

  }
}
