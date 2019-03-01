// mport { AuthHttpInterceptor } from './authinterceptor';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { StorageServiceModule } from 'angular-webstorage-service';
import{CurrentClientdataServiceService} from './current-clientdata-service.service';
import { ToastrModule } from 'ng6-toastr-notifications';
import { TosterService } from './shared/services/toster.service';
import { MatNativeDateModule } from '@angular/material';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StorageServiceModule,
        MatNativeDateModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
   
    providers: [
        CurrentClientdataServiceService,
        TosterService,DatePipe,
      
        AuthGuard,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: AuthHttpInterceptor,
        //     multi: true
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
