import React, {FC, useState} from "react";
import Title from "@components/title/Title";
import cl from "./History.module.scss";
import HistoryCard from "@components/UI/card/HistoryCard";

const History: FC = () => {
    const [histories, setHistories] = useState([
        {
            id: 0,
            title: "Book",
            value: 100,
            status: true
        },
        {
            id: 1,
            title: "Book",
            value: 100,
            status: true
        }
    ]);

    return (
        <div className={cl.history}>
            <Title title={"History"}/>

            <ul className={cl.list}>
                {
                    histories.map(history => <li key={history.id}>
                        <HistoryCard status={history.status} value={history.value} title={history.title}/>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default History;