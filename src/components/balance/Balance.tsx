import React, {FC, useContext} from "react";
import cl from "./Balance.module.scss";
import {BalanceContext} from "@context/BalanceContext";
import {beautifyBalance} from "@utils/utils";

const Balance: FC = () => {
    const {balance, income, expense} = useContext(BalanceContext);

    return (
        <div className={cl.balance}>
            <div className={cl.top}>
                <h2 className={cl.title}>Your balance</h2>
                <span className={cl.count}>{beautifyBalance(balance)}</span>
            </div>

            <ul className={cl.list}>
                <li>
                    <span className={cl.title}>Income</span>
                    <span className={[cl.count_small, cl.count_plus].join(" ")}>{beautifyBalance(income)}</span>
                </li>

                <li>
                    <span className={cl.title}>Expense</span>
                    <span className={[cl.count_small, cl.count_minus].join(" ")}>{beautifyBalance(expense)}</span>
                </li>
            </ul>
        </div>
    );
};

export default Balance;