import {Component, OnInit} from '@angular/core';
import {AbstractFormComponent} from '../../../components/abstract-form.component';
import {AuthService} from 'src/app/services/auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {USER_ROLE} from '../../../models/user';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AbstractFormComponent<any> implements OnInit {

    USER_ROLE = USER_ROLE;

    constructor(
        private authService: AuthService,
    ) {
        super();
        this.form = new FormGroup({
            email: new FormControl(``, [Validators.email, Validators.required]),
            username: new FormControl(``, [Validators.minLength(4), Validators.required]),
            password: new FormControl(``, [Validators.minLength(4), Validators.required]),
            role: new FormControl(``, [Validators.required]),
            fullName: new FormControl(``, [Validators.minLength(4), Validators.required]),
            phone: new FormControl(``, [Validators.minLength(4), Validators.required]),
            address: new FormControl(``, [Validators.minLength(4), Validators.required]),
            city: new FormControl(``, [Validators.minLength(4), Validators.required]),
            country: new FormControl(``, [Validators.minLength(4), Validators.required])
        });
    }

    ngOnInit() {
    }

    _onSubmit(formData) {
        return this.authService.signup(formData);
    }

    onSuccess() {
    }

}
