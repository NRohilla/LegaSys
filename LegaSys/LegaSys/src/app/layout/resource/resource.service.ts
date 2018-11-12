<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
=======
import { Injectable ,Inject} from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Resource} from './resource.model'
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
>>>>>>> Bder

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

<<<<<<< HEAD
  URL="http://localhost:58164/resource/getall";
  constructor(private http: HttpClient) { }

  GetResourceDetails(){
    return this.http.get(this.URL);

  }
=======
  baseUrl: string = 'http://localhost:58164/resource/getall';
  
  constructor(private http: HttpClient,@Inject(SESSION_STORAGE) private storage: StorageService,
      ) { }



  getResource() {

    debugger;
    var token= this.storage.get('UserToken');
    console.log(token);
    if(token !=null)
    {
      var atoken = token.access_token;
    }
    
    var abc = 'Bearer ' + token.access_token;
    console.log(abc);
 //  var reqHeader = new HttpHeaders({'Authorization': });
 let headerss = new HttpHeaders();
 headerss = headerss.append('Authorization',abc );
 
//this.http.head()
   // return this.http.get(this.baseUrl, {headers:new HttpHeaders()('Authorization', `bearer ${token}`)});
    return this.http.get(this.baseUrl, {headers:headerss})

   
  
    //return this.http.get(this.baseUrl, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})});
  }
  
 // this.currentValue = 'bearer ' + this.storage.get('UserToken');
  // authReq = req.clone({ headers: req.headers.set('Authorization', this.currentValue) });


  // getResource(){
  //   return this.http.get<Resource[]>(this.baseUrl);
  // }

  
   getResourceById(UserId:number){
      return this.http.get<Resource[]>(this.baseUrl+'/'+UserId);
    }

   addResource(resource:Resource){
     return this.http.post(this.baseUrl,resource);
   } 
   updateResource(resource:Resource){
     return this.http.put(this.baseUrl+'/'+resource.UserDetailID,resource);
   }
   deleteResource(UserId:number){
     return this.http.delete<Resource[]>(this.baseUrl+UserId)
   }


>>>>>>> Bder
}
