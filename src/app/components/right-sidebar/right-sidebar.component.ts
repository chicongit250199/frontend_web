import {Component, OnInit} from '@angular/core';
import {ChatUsers} from '../../models/chat.model';

@Component({
    selector: 'app-right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

    public users: ChatUsers[] = [];
    public searchUsers: ChatUsers[] = [];
    public notFound = false;
    public searchText: string;

    constructor() {
    }

    searchTerm(term: any) {
        if (!term) {
            return this.searchUsers = this.users;
        }
        term = term.toLowerCase();
        const user = [];
        this.users.filter(users => {
            if (users.name.toLowerCase().includes(term)) {
                user.push(users);
            }
        });
        this.checkSearchResultEmpty(user);
        this.searchUsers = user;
    }

    checkSearchResultEmpty(user) {
        this.notFound = !user.length;
    }

    ngOnInit() {
    }

}
