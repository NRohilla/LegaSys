import { LoginService } from './login-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule,StorageServiceModule],
    declarations: [LoginComponent],
    providers:[LoginService]
})
export class LoginModule {}
