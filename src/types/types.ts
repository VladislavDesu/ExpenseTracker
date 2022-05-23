import {Dispatch, SetStateAction} from "react";

export interface IHistory {
    id: number
    text: string,
    amount: number
}

export interface ITransactionContext {
    balance: number,
    setBalance: Dispatch<SetStateAction<number>>,
    income: number,
    setIncome: Dispatch<SetStateAction<number>>,
    expense: number,
    setExpense: Dispatch<SetStateAction<number>>,
    histories: Array<IHistory>,
    setHistories: Dispatch<SetStateAction<IHistory[]>>,
    error: string,
    setError: Dispatch<SetStateAction<string>>
}