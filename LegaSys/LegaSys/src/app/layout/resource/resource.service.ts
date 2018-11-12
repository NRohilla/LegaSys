import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  URL="http://localhost:58164/resource/getall";
  constructor(private http: HttpClient) { }

  GetResourceDetails(){
    return this.http.get(this.URL);

  }
}
