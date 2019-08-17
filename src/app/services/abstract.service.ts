import {SearchRequest} from '../models/search-request';
import {HttpParams} from '@angular/common/http';
import {DateUtil} from '../util/date-util';

export class AbstractService {
  API_URL = '/api';

  static requestToParams(searchRequest: SearchRequest<any>) {
    let params = new HttpParams();
    if (searchRequest.search) {
      const _searchForm = searchRequest.search;
      for (const key of Object.keys(_searchForm)) {
        const value = _searchForm[key];
        if (value != null) {
          if (value instanceof Date) {
            params = params.append(key, DateUtil.browserDateToUtc1(value));
          } else if (!Number.isNaN(value) || value.length) {
            params = params.append(key, value);
          }
        }
      }
    }
    params = params.append('page', String(searchRequest.page));
    params = params.append('size', String(searchRequest.size));
    if (searchRequest.sort && searchRequest.sort.column && searchRequest.sort.dir) {
      params = params.append('sort', `${searchRequest.sort.column}:${searchRequest.sort.dir}`);
    }

    return params;
  }
}
