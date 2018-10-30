import { LoginService } from './login-service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { first } from 'rxjs/operators';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,
        private loginServiceOb: LoginService,
        @Inject(SESSION_STORAGE) private storage: StorageService
    ) { }

    ngOnInit() { }

    onLoggedin(userName, password) {
        this.loginServiceOb.authenticateUser(userName, password)
            .pipe(first())
            .subscribe(
                data => {
                    debugger;
                    this.storage.set("UserToken", data);
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigateByUrl("/dashboard");
                },
                error => {
                    
                });
    }
}




