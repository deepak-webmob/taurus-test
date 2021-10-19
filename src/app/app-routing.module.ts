import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () =>
      import('./modules/new-trasnactions/new-trasnactions.module').then(
        (m) => m.NewTrasnactionsModule
      ),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./modules/show-trasnactions/show-trasnactions.module').then(
        (m) => m.ShowTrasnactionsModule
      ),
  },
  {
    path: '',
    redirectTo: '/view',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
