import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { RadialModule } from "./radial/radial.module";

const routes: Routes = [
  { path: 'radial', loadChildren: () => RadialModule }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }