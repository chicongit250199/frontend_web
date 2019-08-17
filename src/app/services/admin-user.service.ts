import {Injectable} from '@angular/core';
import {AbstractAdminService} from './admin/abstract-admin-service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchRequest} from '../models/search-request';
import {AbstractService} from './abstract.service';
import {PageResponse} from '../models/page-response';
import {AdminUserSearchForm} from '../pages/administrator/admin-user/admin-user.component';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AdminUserService extends AbstractAdminService {
    _URL = `${this.ADMIN_API_URL}/user`;

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    search(searchForm: SearchRequest<AdminUserSearchForm>) {
        const params = AbstractService.requestToParams(searchForm);
        return this.http.get<PageResponse<User>>(`${this._URL}/`, {params});
    }

    getByIdUser(uId) {
        return this.http.get<User>(`${this._URL}/${uId}`);
    }

    updateUser(uId, data) {
        return this.http.post(`${this._URL}/${uId}`, {data: data});
    }

    getAllUser(search) {
        let params = new HttpParams();
        if (search) {
            params = params.append('search', search);
        }
        return this.http.get<User[]>(`${this._URL}/users/search`,{params});
    }
}
