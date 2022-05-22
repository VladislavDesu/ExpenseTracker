export interface IBalanceContext {
    balance: number,
    income: number,
    expense: number
}

export interface IHistoryCard {
    id?: number,
    title: string,
    value: number,
    status: boolean
}