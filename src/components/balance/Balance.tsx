import React, {FC} from "react";
import cl from "./Balance.module.scss";

const Balance: FC = () => {
    return (
        <div className={cl.balance}>
            <div className={cl.top}>
                <h2 className={cl.title}>Your balance</h2>
                <span className={cl.count}>$400.00</span>
            </div>

            <ul className={cl.list}>
                <li>
                    <span className={cl.title}>Income</span>
                    <span className={[cl.count_small, cl.count_plus].join(" ")}>$400.00</span>
                </li>

                <li>
                    <span className={cl.title}>Expense</span>
                    <span className={[cl.count_small, cl.count_minus].join(" ")}>$400.00</span>
                </li>
            </ul>
        </div>
    );
};

export default Balance;