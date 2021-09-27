import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'string-pattern',
    pathMatch: 'full',
  },
  {
    path: 'string-pattern',
    loadChildren: () =>
      import('./views/pattern/pattern.module').then((m) => m.PatternModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
