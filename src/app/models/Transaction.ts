export interface Transaction{
    _id:string;
    accountNumber:string;
    amount:string;
    currency:string;
    feePaidByReceiver:boolean;
    destination:string;
    metaDatas:Array<MetaData>;
    date:string;
}

export interface MetaData{
    id?:string;
    key:string;
    value:string;
}