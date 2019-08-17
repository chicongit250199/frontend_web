import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {Sort} from '../../models/search-request';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {'asc': 'desc', 'desc': '', '': 'asc'};

@Directive({
  selector: '[appSortable]',
})
export class SortableDirective {
  @HostBinding('class.asc') get isAsc() {
    return this.direction === 'asc';
  }

  @HostBinding('class.desc') get isDesc() {
    return this.direction === 'desc';
  }

  constructor() {
  }

  @Input() direction: SortDirection = '';
  @Input('appSortable') sortable: string;
  @Output() sort = new EventEmitter<Sort>();

  @HostListener('click') click() {
    this.rotate();
  }

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit(<Sort>{column: this.sortable, dir: this.direction});
  }
}
