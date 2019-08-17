import {Routes} from '@angular/router';
import {AdminUserComponent} from '../pages/administrator/admin-user/admin-user.component';
import {AdminGuard} from '../guard/admin.guard';


export const content: Routes = [
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //     canActivate: [UserGuard]
    // },
    {
        path: 'admin',
        children: [
            {
                path: 'user-management',
                component: AdminUserComponent,
                canActivate: [AdminGuard]
            },
        ]
    },
    {
        path: 'e-wallet',
        loadChildren: './pages/e-wallet/e-wallet.module#EWalletModule'
    },

];
