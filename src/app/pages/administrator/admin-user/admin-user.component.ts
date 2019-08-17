import { Component, OnInit } from '@angular/core';
import {AbstractSearchPage} from '../../abstract-search-page';
import {User} from '../../../models/user';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminUserService} from '../../../services/admin-user.service';
import {SearchRequest} from '../../../models/search-request';
import {Observable} from 'rxjs';
import {PageResponse} from '../../../models/page-response';

export interface AdminUserSearchForm {
  user: string;
}

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent extends AbstractSearchPage<AdminUserSearchForm, User> implements OnInit {

  constructor(
      private router: Router,
      private adminUserService: AdminUserService,
      private modalService: NgbModal
  ) {  super(); }

  ngOnInit() {
    this.search();
  }

  _initSearchForm(): SearchRequest<AdminUserSearchForm> {
    return <SearchRequest<AdminUserSearchForm>>{
      size: 10,
      page: 1,
      search: {
        user: ''
      },
      sort: {
        column: 'created_date',
        dir: 'desc'
      }
    };
  }

  _search(searchForm: SearchRequest<AdminUserSearchForm>): Observable<PageResponse<User>> {
    return this.adminUserService.search(searchForm);
  }

}
