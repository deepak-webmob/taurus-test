import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Transaction } from 'src/app/models/Transaction';
import { HelperService } from '../../shared/helper.service';

@Component({
  selector: 'app-show-trasnactions',
  templateUrl: './show-trasnactions.component.html',
  styleUrls: ['./show-trasnactions.component.scss'],
})
export class ShowTrasnactionsComponent implements OnInit, OnDestroy {
  filterForm!: FormGroup;
  transactions$!: Observable<Array<Transaction>>;
  searchString: string = '';
  subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private helperService: HelperService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.transactions$ = this.helperService.localDb$;
    this.intializeForm();
    this.filterByDate();
    this.filterTransactions();
  }

  intializeForm() {
    this.filterForm = this.fb.group({
      searchString: [''],
      rangePicker: [[]],
    });
  }

  createNew() {
    this.router.navigate(['create']);
  }

  deleteTransaction(transaction: Transaction) {
    this.helperService.deleteTransaction(transaction);
  }
  filterTransactions() {
    const sub = this.filterForm
      .get('searchString')
      ?.valueChanges.pipe(debounceTime(100))
      .subscribe((searchString: string) => {
        this.transactions$ = this.helperService.localDb$.pipe(
          map((transactions: Array<Transaction>) =>
            transactions.filter(
              (transaction: Transaction) =>
                transaction._id
                  .toString()
                  .toLowerCase()
                  .includes(searchString.toString().toLowerCase()) ||
                transaction.accountNumber
                  .toString()
                  .toLowerCase()
                  .includes(searchString.toString().toLowerCase()) ||
                transaction.amount
                  .toString()
                  .toLowerCase()
                  .includes(searchString.toString().toLowerCase()) ||
                transaction.destination
                  .toString()
                  .toLowerCase()
                  .includes(searchString.toString().toLowerCase()) ||
                transaction.currency
                  .toString()
                  .toLowerCase()
                  .includes(searchString.toString().toLowerCase())
            )
          )
        );
      });
    this.subscriptions.add(sub);
  }

  filterByDate() {
    const sub = this.filterForm
      .get('rangePicker')
      ?.valueChanges.pipe()
      .subscribe((dates: Array<Date>) => {
        this.transactions$ = this.helperService.localDb$.pipe(
          map((transactions: Array<Transaction>) =>
            transactions.filter((transaction: Transaction) => {
              const transactionDate = new Date(transaction.date);
              console.log(transactionDate.toLocaleDateString());
              console.log(transactionDate);
              console.log(dates);
              return (
                transactionDate.getTime() >= dates[0].getTime() &&
                transactionDate.getTime() <= dates[1].getTime()
              );
            })
          )
        );
      });
    this.subscriptions.add(sub);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
