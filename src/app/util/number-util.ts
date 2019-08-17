import {formatNumber} from '@angular/common';

export function moneyFormat(amount) {
  return formatNumber(amount, 'en', '1.2-8');
}

