import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrasnactionComponent } from './create-trasnaction/create-trasnaction.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTrasnactionComponent,
    children: [
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTransactionRoutingModule {
}
