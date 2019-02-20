import { LoginService } from './login-service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { filter, map, catchError, first } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';  // Angular 5/RxJS 5.5


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userName: any;
    password: any;
    constructor(public router: Router,
        private loginServiceOb: LoginService,
        @Inject(SESSION_STORAGE) private storage: StorageService, private _http: HttpClient
    ) {
        //to test the call to the API hosted....
        // debugger;
        // this.loginServiceOb.test().subscribe(
        //     data => {
        //        debugger;
        //       return true;
        //     },
        //     error => {
        //         debugger;
        //       console.error("Error saving food!");
        //       return Observable.throw(error);  // Angular 5/RxJS 5.5
        //     }
        //  );
    }

    ngOnInit() { }

    onLoggedin(userName, password) {
        debugger;
  
        this.loginServiceOb.authenticateUser(userName, password)
            .pipe(first())
            .subscribe(
                data => {
                    debugger;
                    this.storage.set("userDetailsID", data);
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('userDetailsID', data.UserDetailID);
                    this.storage.set('UserName',data.Name);
                    this.router.navigateByUrl("/dashboard");
                },
                error => {
                    debugger;
                    console.log(error);
                });

    }
}




