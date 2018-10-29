import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticateService } from '../services/app-auth.service'
import { LocalStorageService } from 'angular-2-local-storage';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {
debugger;
    LoginModel = {
        Username: "",
        Password: ""
    }

    constructor(public router: Router, private _AuthenticateService: AuthenticateService,private _LocalStorageService:LocalStorageService) { }

    ngOnInit() { }

    onLoggedin() {
        debugger;
        this._AuthenticateService.AuthenticateLogin(this.LoginModel.Username, this.LoginModel.Password)
            .subscribe(result => this.RequestSuccess(result), result => this.RequestError(result));
        //localStorage.setItem('isLoggedin', 'true');
    }

    RequestSuccess(result) {
        debugger;
    }

    RequestError(result) {
        debugger;
    }
}
