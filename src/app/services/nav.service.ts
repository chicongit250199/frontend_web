import {HostListener, Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {USER_ROLE} from '../models/user';
import {Router} from '@angular/router';

// Menu
export interface Menu {
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})

export class NavService {

    constructor(private authService: AuthService, private router: Router) {
        this.onResize();
        if (this.screenWidth < 991) {
            this.collapseSidebar = true;
        }
        this.items = authService.currentUser.pipe(map(t => {
            if (t === null) {
                return this.router.navigateByUrl('/auth/login');
            } else if (t.role === USER_ROLE.USER) {
                return this.MENU_ITEMS  = [...this.MENU_ITEMS];
            } else if (t.role === USER_ROLE.ADMIN) {
                return this.MENU_ITEMS  = [...this.ADMIN_ITEMS];
            }
        }));
    }

    public screenWidth: any;
    public collapseSidebar = false;
    public items;

    MENU_ITEMS: Menu[] = [
        {
            title: 'My Card', icon: '<i class="fas fa-credit-card"></i>', type: 'link', active: false, path: '/user/my-card'
        },
        {
            title: 'My Profile', icon: '<i class="fas fa-user"></i>', type: 'link', active: false, path: '/user/profile'
        },
        {
            title: 'My Wallet', icon: '<i class="fas fa-wallet"></i>', type: 'sub', children: [
                {
                    path: '/e-wallet/btc', title: 'Bitcoin', type: 'link',
                },
                {
                    path: '/e-wallet/mxt', title: 'MXTCoin', type: 'link',
                },
                {
                    path: '/e-wallet/clb', title: 'ClbCoin', type: 'link',
                },
            ]
        }
    ];

    ADMIN_ITEMS: Menu[] = [
        {
            title: 'Administrator',
            icon: '<i class="fa-fw fas fa-cogs"></i>',
            type: 'sub',
            children: [
                {
                    path: '/admin/user-management', title: 'User Management', type: 'link', icon: 'airplay'
                },
            ]
        }
    ];

    // Windows width
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenWidth = window.innerWidth;
    }


}
