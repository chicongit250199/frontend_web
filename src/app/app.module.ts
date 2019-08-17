import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/authentication/login/login.component';
import {ToastrModule} from 'ngx-toastr';

import {FirebaseAuthService} from './services/firebase/firebase-auth.service';
import {AdminGuard} from './guard/admin.guard';
import {SecureInnerPagesGuard} from './guard/SecureInnerPagesGuard.guard';
import {CookieService} from 'ngx-cookie-service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ChartistModule} from 'ng-chartist';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {CountToModule} from 'angular-count-to';
import {ForgetPwdComponent} from './pages/authentication/forget-pwd/forget-pwd.component';
import {SortableDirective} from './components/table/sortable.directive';
import {MyHttpInterceptor} from './providers/http.interceptor';
import {ResetPwdComponent} from './pages/authentication/reset-pwd/reset-pwd.component';
import {DatePipe} from './pipes/date.pipe';
import {AdminUserComponent} from './pages/administrator/admin-user/admin-user.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {RegisterComponent} from './pages/authentication/register/register.component';
import {CardFormatPipe} from './pipes/card-format.pipe';
import {ModalConfirmComponent} from './components/modal/modal-confirm/modal-confirm.component';
import {ModalAlertComponent} from './components/modal/modal-alert/modal-alert.component';
import {ContentLayoutComponent} from './components/layout/content-layout/content-layout.component';
import {FullLayoutComponent} from './components/layout/full-layout/full-layout.component';
import {FooterComponent} from './components/footer/footer.component';
import {BookmarkComponent} from './components/bookmark/bookmark.component';
import {HeaderComponent} from './components/header/header.component';
import {LoaderComponent} from './components/loader/loader.component';
import {RightSidebarComponent} from './components/right-sidebar/right-sidebar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ToggleFullscreenDirective} from './directives/fullscreen.directive';
import {FeatherIconsComponent} from './components/feather-icons/feather-icons.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {CustomizerComponent} from './components/customizer/customizer.component';
import {DragulaModule} from 'ng2-dragula';
import {EWalletModule} from './pages/e-wallet/e-wallet.module';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import {FormValidDirective} from './components/form-valid.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ForgetPwdComponent,
        DashboardComponent,
        SortableDirective,
        ResetPwdComponent,
        DatePipe,
        FormValidDirective,
        AdminUserComponent,
        RegisterComponent,
        ContentLayoutComponent,
        FullLayoutComponent,
        FooterComponent, BookmarkComponent, HeaderComponent,
        LoaderComponent, RightSidebarComponent, SidebarComponent,
        ToggleFullscreenDirective, FeatherIconsComponent, BreadcrumbComponent, CustomizerComponent,
        CardFormatPipe, ModalConfirmComponent, ModalAlertComponent, DocumentUploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        }),
        NgbModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        ChartistModule,
        ChartsModule,
        CountToModule,
        NgSelectModule,
        DragulaModule,
        EWalletModule
    ],
    providers: [
        FirebaseAuthService, AdminGuard, SecureInnerPagesGuard, CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true}
    ],
    entryComponents: [
        ModalConfirmComponent, ModalAlertComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

