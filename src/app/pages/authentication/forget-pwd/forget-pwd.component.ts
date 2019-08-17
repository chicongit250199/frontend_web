import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractFormComponent } from '../../../components/abstract-form.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss']
})
export class ForgetPwdComponent extends AbstractFormComponent<any> implements OnInit {

  constructor(
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  _onSubmit(formData) {
    return this.authService.forgotPassword(formData.email);
  }

  onSuccess() {

  }

}
