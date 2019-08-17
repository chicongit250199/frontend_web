import {Routes} from '@angular/router';
import {LoginComponent} from '../pages/authentication/login/login.component';
import {ForgetPwdComponent} from '../pages/authentication/forget-pwd/forget-pwd.component';
import {ResetPwdComponent} from '../pages/authentication/reset-pwd/reset-pwd.component';
import {RegisterComponent} from '../pages/authentication/register/register.component';

export const full: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgetPwdComponent
            },
            {
                path: 'reset-password',
                component: ResetPwdComponent
            },
            {
                path: 'signup',
                component: RegisterComponent
            }
        ]
    }
];
