import React, {FC, useState} from "react";
import "@styles/global.scss";
import Container from "@components/container/Container";
import Header from "@components/header/Header";
import Balance from "@components/balance/Balance";
import {TransactionContext} from "@context/TransactionContext";
import History from "@components/history/History";
import Transaction from "@components/transaction/Transaction";
import {IHistory, ITransactionContext} from "@/types/types";

const App: FC = () => {
    const [error, setError] = useState<string>("");
    const [balance, setBalance] = useState<number>(0);
    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);
    const [histories, setHistories] = useState<IHistory[]>([]);

    const transaction: ITransactionContext = {
        error,
        setError,
        balance,
        income,
        expense,
        histories,
        setBalance,
        setIncome,
        setExpense,
        setHistories
    };

    return (
        <div className="App">
            <TransactionContext.Provider value={transaction}>
                <Container>
                    <Header/>
                    <Balance/>
                    <History/>
                    <Transaction/>
                </Container>
            </TransactionContext.Provider>
        </div>
    );
};

export default App;