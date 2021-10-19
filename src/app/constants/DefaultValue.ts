import { Transaction } from "../models/Transaction";


export const DEFAULT_TRANSACTION: Transaction = {
    _id:'',
    accountNumber:'',
    amount:'',
    currency:'',
    date:'',
    destination:'',
    feePaidByReceiver:false,
    metaDatas:[]
};