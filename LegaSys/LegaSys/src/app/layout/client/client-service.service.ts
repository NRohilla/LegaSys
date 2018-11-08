import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  GetClientDetails(){
    return this.http.get('http://localhost:58164/api/Client/');
  }
}
