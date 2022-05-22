import {createContext} from "react";
import {IBalanceContext} from "@/types/types";

export const balanceDefaultValue: IBalanceContext = {
    balance: 0,
    income: 0,
    expense: 0
};

export const BalanceContext = createContext<IBalanceContext>(balanceDefaultValue);