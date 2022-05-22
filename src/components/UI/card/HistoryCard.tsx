import React, {FC} from "react";
import cl from "./HistoryCard.module.scss";
import {IHistoryCard} from "@/types/types";

const HistoryCard: FC<IHistoryCard> = ({title, value, status}) => {
    return (
        <div className={cl.card}>
            <span>{title}</span>
            <span>{value}</span>
        </div>
    );
};

export default HistoryCard;