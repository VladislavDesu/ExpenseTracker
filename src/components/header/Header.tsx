import React, {FC} from "react";
import cl from "./header.module.scss"

const Header: FC = () => {
    return (
        <header className={cl.header}>
            <h1 className={cl.title}>Expense Tracker</h1>
        </header>
    );
};

export default Header;