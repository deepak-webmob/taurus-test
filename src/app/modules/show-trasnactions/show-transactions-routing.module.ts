import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTrasnactionsComponent } from './show-trasnactions/show-trasnactions.component';

const routes: Routes = [
  {
    path: '',
    component: ShowTrasnactionsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTransactionRoutingModule {}
