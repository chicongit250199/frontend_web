import {SortDirection} from '../components/table/sortable.directive';

export interface Sort {
  column: string;
  dir: SortDirection;
}

export interface SearchRequest<T> {
  page: number;
  size: number;
  search?: T;
  sort?: Sort;
}
