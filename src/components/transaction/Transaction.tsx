import React, {FC} from "react";
import Title from "@components/title/Title";
import cl from "./Transcation.module.scss";
import Button from "@components/UI/button/Button";
import Input from "@components/UI/input/Input";

const Transaction: FC = () => {
    return (
        <div className={cl.transaction}>
            <Title title={"Add new transaction"}/>

            <div className={cl.form}>
                <label>
                    <span>Text</span>
                    <Input type="text" placeholder="Enter text..."/>
                </label>

                <label>
                    <span>Amount</span>
                    <span>negative - expense, positive + income</span>
                    <Input type="text" placeholder="Enter amount..."/>
                </label>
            </div>

            <Button type="button">Add transaction</Button>
        </div>
    );
};

export default Transaction;