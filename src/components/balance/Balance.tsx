import React, {FC, useContext} from "react";
import cl from "./Balance.module.scss";
import {defaultTransactionContext, TransactionContext} from "@context/TransactionContext";
import {beautifyBalance} from "@utils/utils";

const Balance: FC = () => {
    const context: defaultTransactionContext = useContext(TransactionContext);

    return (
        <div className={cl.balance}>
            <div className={cl.top}>
                <h2 className={cl.title}>Your balance</h2>
                <span className={cl.count}>{beautifyBalance(context?.balance)}</span>
            </div>

            <ul className={cl.list}>
                <li>
                    <span className={cl.title}>Income</span>
                    <span className={[cl.count_small, cl.count_plus].join(" ")}>{beautifyBalance(context?.income)}</span>
                </li>

                <li>
                    <span className={cl.title}>Expense</span>
                    <span className={[cl.count_small, cl.count_minus].join(" ")}>{beautifyBalance(context?.expense)}</span>
                </li>
            </ul>
        </div>
    );
};

export default Balance;