import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        // this.authenticationService.logout();
        this.authService.logout();
        // this.router.navigateByUrl('/login');
        location.reload(true);
      } else {
        return throwError(err);
      }
    }));
  }
}
