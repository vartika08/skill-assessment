import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringPatternComponent } from './string-pattern/string-pattern.component';

const routes: Routes = [
  {
    path: '',
    component: StringPatternComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatternRoutingModule {}
