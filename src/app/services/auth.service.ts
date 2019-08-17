import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, USER_ROLE} from '../models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AbstractService} from './abstract.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService extends AbstractService {
    _URL = `${this.API_URL}/auth`;

    constructor(private http: HttpClient) {
        super();
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('information-user.ts')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    login(username: string, password: string) {
        return this.http.post<User>(this._URL + '/sign-in', {username, password})
            .pipe(map(user => {
                console.log(user);
                if (user) {
                    localStorage.setItem('information-user.ts', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    get isLoggedIn(): boolean {
        const user: User = JSON.parse(localStorage.getItem('information-user.ts'));
        return (user !== null);
    }

    get isAdmin(): boolean {
        const user: User = JSON.parse(localStorage.getItem('information-user.ts'));
        return (user !== null && user.role === USER_ROLE.ADMIN
        );
    }

    logout() {
        localStorage.removeItem('information-user.ts');
        this.currentUserSubject.next(null);
    }

    forgotPassword(email) {
        return this.http.post(`${this._URL}/password/forget`, { email });
    }

    verifyForgotPasswordToken(token: string, email: string) {
        return this.http.get(`${this._URL}/password/verify-token?token=${token}&email=${email}`);
    }

    resetPassword({email, token, password, retypePassword}) {
        return this.http.post(`${this._URL}/password/reset`, {email, token, password, retypePassword});
    }

    signup(data: any) {
        return this.http.post(`${this._URL}/register`, data);
    }

    resendRegister(email) {
        return this.http.post(`${this._URL}/register/resend-register-user`, { email });
    }

}
