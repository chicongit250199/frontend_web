import {FormGroup} from '@angular/forms';
import {isObservable, Observable} from 'rxjs';

export interface FormError {
  code: string;
  name: string;
  message?: string;
}

export abstract class AbstractFormComponent<R> {
  isLoading = false;
  form: FormGroup;
  errorMessage = '';
  formErrors: FormError[] = [];
  formResult: 0 | 1 | null;

  reset() {
    this.form.reset();
  }

  handleError(error) {
    console.log(error);
    this.formErrors = error.error;
    this.errorMessage = error.statusText;
    this.formResult = 0;
    this.onComplete();
  }

  onComplete() {
    this.isLoading = false;
  }

  onSubmit() {
    if (this.form.valid) {
      Promise.resolve(this.needConfirm()).then(
        () => {
          this.formResult = null;
          this.errorMessage = '';
          this.formErrors = [];
          this.isLoading = true;
          const result = this._onSubmit(this.form.getRawValue());
          if (isObservable(result)) {
            result.subscribe(value => {
              this.formResult = 1;
              this.onSuccess(value);
            }, error1 => {
              this.handleError(error1);
            }, () => this.onComplete());
          } else if (result) {
            this.onSuccess(result);
            this.onComplete();
          } else {
            this.onComplete();
          }

        }
      );
    }
  }

  needConfirm(): Promise<any> | boolean {
    return true;
  }

  abstract _onSubmit(formData: any): Observable<R> | R;

  abstract onSuccess(resp: any);
}
