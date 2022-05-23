import {createContext} from "react";
import {ITransactionContext} from "@/types/types";

export type defaultTransactionContext = ITransactionContext | null;

export const TransactionContext = createContext<defaultTransactionContext>(null);