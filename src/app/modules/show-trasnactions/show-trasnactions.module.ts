import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTrasnactionsComponent } from './show-trasnactions/show-trasnactions.component';
import { ShowTransactionRoutingModule } from './show-transactions-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowTrasnactionsComponent],
  imports: [
    CommonModule,
    ShowTransactionRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzDatePickerModule,
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
  ],
})
export class ShowTrasnactionsModule {}
