import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTrasnactionComponent } from './create-trasnaction/create-trasnaction.component';
import { NewTransactionRoutingModule } from './new-transaction-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CreateTrasnactionComponent],
  imports: [
    CommonModule,
    NewTransactionRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    FormsModule,
    NzInputModule,
    NzSwitchModule,
    NzButtonModule,
    NzIconModule,
    NzInputNumberModule,
  ],
})
export class NewTrasnactionsModule {}
