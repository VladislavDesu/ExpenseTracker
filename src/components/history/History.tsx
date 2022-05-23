import React, {FC, useContext} from "react";
import Title from "@components/title/Title";
import cl from "./History.module.scss";
import HistoryCard from "@components/UI/card/HistoryCard";
import {defaultTransactionContext, TransactionContext} from "@context/TransactionContext";

const History: FC = () => {
    const context: defaultTransactionContext = useContext(TransactionContext);

    return (
        <>
            {
                context?.histories.length !== 0 ? <div className={cl.history}>
                    <Title title={"History"}/>

                    <ul className={cl.list}>
                        {
                            context?.histories.map(history => <li key={history.id}>
                                <HistoryCard id={history.id} text={history.text} amount={history.amount}/>
                            </li>)
                        }
                    </ul>
                </div> : null
            }

        </>
    )
};

export default History;