import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Injectable, Injector,Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    currentValue: any;
    loginUrl: string;
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
       debugger;
       var authReq:any;
      
     
       if(req.url=="http://localhost:58164/api/token"){
             authReq = req.clone();
       }
       else{
              this.currentValue = this.storage.get('UserToken');
               if (!this.currentValue) {
                      // window.location.href = this.loginUrl;
              }
              else{
                    this.currentValue = 'bearer ' + this.storage.get('UserToken');
                    authReq = req.clone({ headers: req.headers.set('Authorization', this.currentValue) });
              }
       }

        return next.handle(authReq)
            .pipe(catchError((error, caught) => {
                console.log("Error Occurred");
                console.log(error);
                return Observable.throw(error);
            })) as any;
    }


}