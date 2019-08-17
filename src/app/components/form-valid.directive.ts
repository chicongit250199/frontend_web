import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appFormValid]'
})
export class FormValidDirective implements OnInit {
  @Input('appFormValid') input: AbstractControl;
  @Input() errorMessage;
  errorEls;
  parentEls;

  ERROR_MESSAGE = {
    min: '숫자는 {0} 보다 커야합니다.',
    max: '숫자는 {0} 이하 여야합니다.',
    required: '필드가 필요합니다.',
    email: 'Email Invalidate!',
    minlength: '길이는 {0} 글자, 현재 길이 ({1})보다 커야합니다.',
    maxlength: '길이가 {0} 자 미만이어야합니다.',
    pattern: '패턴 {0}이 (가) 유효하지 않습니다.'
  };

  constructor(private el: ElementRef, private render2: Renderer2) {
  }

  onValueChange() {
    if (this.errorEls) {
      this.render2.removeChild(this.parentEls, this.errorEls);
    }
    if (this.isFieldInvalid()) {
      this.render2.addClass(this.parentEls, 'has-danger');
      this.errorEls = this.buildErrorEls();
      this.render2.appendChild(this.parentEls, this.errorEls);
    } else {
      if (this.parentEls.classList.contains('has-danger')) {
        this.render2.removeClass(this.parentEls, 'has-danger');
      }
    }
  }

  isFieldInvalid() {
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }

  buildErrorEls() {
    const div = this.render2.createElement('div');
    this.render2.addClass(div, 'form-control-feedback');
    Object.keys(this.input.errors).forEach(value => {
      const error = this.input.errors[value];
      const p = this.render2.createElement('p');
      if (this.errorMessage) {
        this.ERROR_MESSAGE = {...this.ERROR_MESSAGE, ...this.errorMessage};
      }

      let _errorMessage: string = this.ERROR_MESSAGE[value];
      switch (value) {
        case 'min':
          _errorMessage = _errorMessage.replace('{0}', error.min);
          break;
        case 'max':
          _errorMessage = _errorMessage.replace('{0}', error.max);
          break;
        case 'minlength':
          _errorMessage = _errorMessage.replace('{0}', error.requiredLength);
          _errorMessage = _errorMessage.replace('{1}', error.actualLength);
          break;
        case 'maxlength':
          _errorMessage = _errorMessage.replace('{0}', error.requiredLength);
          _errorMessage = _errorMessage.replace('{1}', error.actualLength);
          break;
        case 'pattern':
          _errorMessage = _errorMessage.replace('{0}', error.requiredPattern);
          break;
        case 'allowCountries':
          _errorMessage = _errorMessage.replace('{0}', error.value);
          break;
        case 'validPhoneExist':
          _errorMessage = _errorMessage.replace('{0}', error.value);
          break;
        case 'validNotSupportCountry':
          _errorMessage = _errorMessage.replace('{0}', error.value);
          break;
        case 'validNotSupportMobile':
          _errorMessage = _errorMessage.replace('{0}', error.value);
          break;
        case 'validNotSupportFixLine':
          _errorMessage = _errorMessage.replace('{0}', error.value);
          break;
        case 'validNotSupportMobileAndFixLine':
          _errorMessage = _errorMessage.replace('{0}', error.value);
          break;
      }
      const errorText = this.render2.createText(_errorMessage);
      this.render2.appendChild(p, errorText);
      this.render2.appendChild(div, p);
    });

    return div;
  }

  ngOnInit(): void {
    this.parentEls = this.render2.parentNode(this.el.nativeElement);
    if (this.parentEls.classList.contains('input-group')) {
      this.parentEls = this.render2.parentNode(this.parentEls);
    }

    this.input.valueChanges.subscribe(() => {
      this.onValueChange();
    });
  }
}
