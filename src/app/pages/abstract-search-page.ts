import {SearchRequest, Sort} from '../models/search-request';
import {PageResponse} from '../models/page-response';
import {BehaviorSubject, Observable} from 'rxjs';

export abstract class AbstractSearchPage<T, R> {
  searchForm: SearchRequest<T> = this._initSearchForm();
  pageResponse: PageResponse<R> = {
    count: 0,
    rows: []
  };
  _loading$ = new BehaviorSubject<boolean>(true);
  searchError = '';

  get page() {
    return this.searchForm.page;
  }

  set page(_page: number) {
    this.searchForm.page = _page;
    this.search();
  }

  get size() {
    return this.searchForm.size;
  }

  set size(_size) {
    this.searchForm.size = _size;
    this.search();
  }

  search() {
    this._loading$.next(true);
    this._search(this.searchForm).subscribe((resp) => {
      this.pageResponse = resp;
      console.log(resp);
      this._loading$.next(false);
    }, error1 => {
      console.log(error1);
      this.searchError = error1.error ? error1.error.error : error1.statusMessage;
      this._loading$.next(false);
    });
  }

  loadMore() {
    this.searchForm.page += 1;
    this._loading$.next(true);
    this._search(this.searchForm).subscribe((resp) => {
      this.pageResponse.rows = this.pageResponse.rows.concat(resp.rows);
      this._loading$.next(false);
    }, error1 => {
      console.log(error1);
      this.searchError = error1.error ? error1.error.error : error1.statusMessage;
      this._loading$.next(false);
    });
  }

  onSort($event: Sort) {
    this._onSort($event);
    this.searchForm.sort = $event;
    console.log($event);
    this.search();
  }

  _onSort($event: Sort) {

  }

  abstract _search(searchForm: SearchRequest<T>): Observable<PageResponse<R>>;

  abstract _initSearchForm(): SearchRequest<T>;
}
