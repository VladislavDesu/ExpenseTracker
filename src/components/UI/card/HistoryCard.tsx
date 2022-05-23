import React, {FC} from "react";
import cl from "./HistoryCard.module.scss";
import {IHistory} from "@/types/types";

const HistoryCard: FC<IHistory> = ({text, amount, id}) => {
    const rootClass = [cl.card];

    if (amount > 0) {
        rootClass.push(cl.card_plus)
    } else {
        rootClass.push(cl.card_minus)
    }

    return (
        <div className={rootClass.join(" ")}>
            <span>{text}</span>
            <span>{amount > 0 ? "+" + amount: amount}</span>
        </div>
    );
};

export default HistoryCard;