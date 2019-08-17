import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentLayoutComponent} from './components/layout/content-layout/content-layout.component';
import {FullLayoutComponent} from './components/layout/full-layout/full-layout.component';
import {content} from './routes/content-routes';
import {full} from './routes/full.routes';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: ContentLayoutComponent,
        children: content
    },
    {
        path: '',
        component: FullLayoutComponent,
        children: full
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // preloadingStrategy: PreloadAllModules,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
