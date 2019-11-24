import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {FIELD_ERROR} from 'src/app/models/errors';
import * as firebase from 'firebase';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public user: firebase.User;
    public loginForm: FormGroup;
    public resendRegisterResult: any;
    public errorMessage = ``;
    showLoader = false;

    constructor(public authService: AuthService,
                private fb: FormBuilder,
                private router: Router,
                public toster: ToastrService) {
        this.loginForm = fb.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required]
        });
        console.log(this.loginForm);
    }

    ngOnInit() {
    }

    // Simple Login
    login() {
        this.showLoader = true;
        this.authService
            .login(this.loginForm.value['username'], this.loginForm.value['password'])
            .subscribe(
                user => {
                    this.router.navigateByUrl('/user/my-card');
                },
                err => {
                    this.showLoader = false;

                    if (err.error[0].code === FIELD_ERROR.EMAIL_NOT_ACTIVATED) {
                        this.resendRegisterResult = -1;
                    } else {
                        this.toster.error(err.error[0].message);
                    }
                });

    }

    resendActivateUser() {
        this.showLoader = true;
        this.authService.resendRegister(this.loginForm.value['username'])
            .subscribe(t => {
                this.resendRegisterResult = 1;
                this.showLoader = false;
            }, e => {
                this.resendRegisterResult = 0;
                this.showLoader = false;
                this.errorMessage = `${e.statusText}`;
            });
    }

}
