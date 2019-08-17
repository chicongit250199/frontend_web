import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BitCoinComponent} from './bit-coin/bit-coin.component';
import {MxtComponent} from './mxt/mxt.component';
import {ClbCoinComponent} from './clb-coin/clb-coin.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'btc',
                component: BitCoinComponent
            },
            {
                path: 'mxt',
                component: MxtComponent
            },
            {
                path: 'clb',
                component: ClbCoinComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EWalletRoutingModule {
}
