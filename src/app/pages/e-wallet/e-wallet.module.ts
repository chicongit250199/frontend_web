import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BitCoinComponent} from './bit-coin/bit-coin.component';
import {MxtComponent} from './mxt/mxt.component';
import {ClbCoinComponent} from './clb-coin/clb-coin.component';
import {EWalletRoutingModule} from './e-wallet-routing.module';

@NgModule({
    declarations: [BitCoinComponent, MxtComponent, ClbCoinComponent],
    imports: [
        CommonModule,
        EWalletRoutingModule
    ]
})
export class EWalletModule {
}
