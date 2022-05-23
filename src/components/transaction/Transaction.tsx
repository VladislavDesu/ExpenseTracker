import React, {FC, useContext, useEffect, useState} from "react";
import Title from "@components/title/Title";
import cl from "./Transcation.module.scss";
import {defaultTransactionContext, TransactionContext} from "@context/TransactionContext";
import Input from "@components/UI/input/Input";
import Button from "@components/UI/button/Button";

interface ITransaction {
    amount: string,
    text: string
}

const Transaction: FC = () => {
    const context: defaultTransactionContext = useContext(TransactionContext);
    const [transaction, setTransaction] = useState<ITransaction>({
        text: "",
        amount: ""
    });

    const [isDisabledTrx, setIsDisabledTrx] = useState<boolean>(true);

    const addTransaction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (+transaction.amount) {
            context?.setBalance(balance => balance + +transaction.amount);

            if (+transaction.amount > 0) {
                context?.setIncome(income => income + +transaction.amount);
            } else {
                context?.setExpense(expense => expense + +transaction.amount);
            }

            context?.setHistories([...context?.histories, {
                id: context?.histories.length + 1,
                text: transaction.text,
                amount: +transaction.amount
            }])

            setTransaction({text: "", amount: ""});
            context?.setError("");
        } else {
            context?.setError("Please input only number for input amount");
            setTransaction(trx => ({...trx, amount: ""}));
        }
    };

    const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTransaction(trx => ({...trx, text: value}));
    };

    const changeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTransaction(trx => ({...trx, amount: value}));
    };

    useEffect(() => {
        if (transaction.text.length && transaction.amount.length) {
            setIsDisabledTrx(false)
        } else {
            setIsDisabledTrx(true)
        }
    }, [transaction]);

    return (
        <div className={cl.transaction}>
            <Title title={"Add new transaction"}/>

            <div className={cl.form}>
                <label>
                    <span>Text</span>
                    <Input type="text" value={transaction.text} onChange={changeTextHandler}
                           placeholder="Enter text..."/>
                </label>

                <label>
                    <span>Amount</span>
                    <span>negative - expense, positive + income</span>
                    <Input type="text" value={transaction.amount} onChange={changeAmountHandler}
                           placeholder="Enter amount..."/>
                </label>

                <div className={cl.error}>{context?.error}</div>

                <Button type="button" onClick={addTransaction} disabled={isDisabledTrx}>Add transaction</Button>
            </div>
        </div>
    );
};

export default Transaction;