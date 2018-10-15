import { NgModule } from '@angular/core';

import { WjGaugeModule } from 'wijmo/wijmo.angular2.gauge';

import { RadialRoutingModule } from "./radial.routing";
import { RadialComponent } from "./radial.component";

@NgModule({
    imports: [
        RadialRoutingModule, WjGaugeModule
    ],
    declarations: [
        RadialComponent
    ]
})
export class RadialModule { }