import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadialComponent } from './radial.component'

const routes: Routes = [
    { path: '', component: RadialComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RadialRoutingModule { }