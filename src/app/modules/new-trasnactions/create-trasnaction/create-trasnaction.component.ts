import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ACCOUNTS,
  CURRENCIES,
  DESTINATIONS,
} from 'src/app/constants/commonConstants';
import { DEFAULT_TRANSACTION } from 'src/app/constants/DefaultValue';
import { MetaData, Transaction } from 'src/app/models/Transaction';
import { HelperService } from '../../shared/helper.service';

@Component({
  selector: 'app-create-trasnaction',
  templateUrl: './create-trasnaction.component.html',
  styleUrls: ['./create-trasnaction.component.scss'],
})
export class CreateTrasnactionComponent implements OnInit {
  newTransaction: Transaction = { ...DEFAULT_TRANSACTION };
  currencyList = CURRENCIES;
  destinationList = DESTINATIONS;
  accountList = ACCOUNTS;
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      accountNumber: [this.newTransaction.accountNumber, Validators.required],
      amount: [this.newTransaction.amount, Validators.required],
      currency: [this.newTransaction.currency, Validators.required],
      feePaidByReceiver: [this.newTransaction.feePaidByReceiver],
      destination: [this.newTransaction.destination, Validators.required],
      metaDatas: this.formBuilder.array([this.newMetaData()]),
    });
  }

  get metaDatas(): FormArray {
    return this.form.get('metaDatas') as FormArray;
  }

  newMetaData(): FormGroup {
    return this.formBuilder.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
  }
  addMetaData() {
    this.metaDatas.push(this.newMetaData());
  }

  removeMetaData(i: number) {
    this.metaDatas.removeAt(i);
  }

  validateTransaction(): boolean {
    if (!this.newTransaction.accountNumber) {
      console.log('account');
      return false;
    } else if (!this.newTransaction.amount) {
      console.log('amount');
      return false;
    } else if (!this.newTransaction.currency) {
      console.log('currency');
      return false;
    } else if (!this.newTransaction.destination) {
      console.log('destination');
      return false;
    } else if (!this.newTransaction.metaDatas) {
      console.log('metadata');
      return false;
    } else if (this.newTransaction.metaDatas.length > 0) {
      return this.validateMetaData(this.newTransaction.metaDatas);
    }
    return true;
  }

  validateMetaData(metaData: Array<MetaData>): boolean {
    const inValidaMetaData = metaData.find(
      (element) => !element.key || !element.value
    );
    console.log('inval meta', inValidaMetaData);
    return inValidaMetaData ? false : true;
  }

  generateTransactionId(): string {
    return (Math.floor(Math.random() * 90000) + 10000).toString();
  }

  submit() {
    this.newTransaction = {
      _id: this.generateTransactionId(),
      date: new Date().toString(),
      ...this.form.value,
    };
    if (this.validateTransaction()) {
      this.helperService.createNewTransactionInDb(this.newTransaction);
      this.router.navigate(['']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
