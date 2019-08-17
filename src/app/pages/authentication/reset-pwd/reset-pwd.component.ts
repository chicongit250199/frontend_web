import { Component, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../../../components/abstract-form.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.scss']
})
export class ResetPwdComponent extends AbstractFormComponent<any> implements OnInit {

  tokenErrorMessage = '';
  token = '';
  email = '';
  constructor(
    private router: ActivatedRoute,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.router.queryParams.subscribe((params: any) => {
      this.authService.verifyForgotPasswordToken(params.token, params.email).subscribe(rs => {
        this.token = params.token;
        this.email = params.email;
      }, ({error: {error}}) => {
        this.tokenErrorMessage = error;
      });
    });
    this.form = new FormGroup({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      'retypePassword': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  _onSubmit(formData) {
    formData.email = this.email;
    formData.token = this.token;
    return this.authService.resetPassword(formData);
  }

  onSuccess() {

  }

}
