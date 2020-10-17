import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {TopBarComponent} from 'src/app/shared/modules/top-bar/components/top-bar/top-bar.component'
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
    ],
    declarations: [TopBarComponent],
    exports: [TopBarComponent]
})
export class TopBarModule {
}
