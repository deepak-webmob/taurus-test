import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE_KEY } from 'src/app/constants/commonConstants';
import { Transaction } from 'src/app/models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private localDb = new BehaviorSubject<Array<Transaction>>([]);
  localDb$ = this.localDb.asObservable();
  
  constructor() { 
    this.updateLocalDb(this.fetchLocalDb());
  }

  fetchLocalDb():Array<Transaction> {
    let transactions:Array<Transaction> = [];
    if(localStorage.getItem(LOCAL_STORAGE_KEY)){
      const localDb =  localStorage.getItem(LOCAL_STORAGE_KEY);
      if(localDb){
        transactions.push(...JSON.parse(localDb));
      }
    }else{
      transactions = [];
    }
    return transactions;
  }

  createNewTransactionInDb(transaction:Transaction){
    let transactions:Array<Transaction> = this.fetchLocalDb();
      transactions.push(transaction);
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(transactions));
      this.updateLocalDb(transactions);
  }

  deleteTransaction(delTransaction:Transaction){
    console.log(delTransaction)
    let transactions:Array<Transaction> = this.fetchLocalDb();
    console.log(transactions.length)
   
    const getIndex = (transaction:Transaction)=>transaction._id===delTransaction._id;
    console.log(transactions.findIndex(getIndex))
    transactions.splice(transactions.findIndex(getIndex),1);
    console.log(transactions.length)
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(transactions));
      this.updateLocalDb(transactions);
  }

  updateLocalDb(transactions:Array<Transaction>){
    this.localDb.next(transactions);
  }
}
