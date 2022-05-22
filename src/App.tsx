import React, {FC} from "react";
import "@styles/global.scss";
import Container from "@components/container/Container";
import Header from "@components/header/Header";
import Balance from "@components/balance/Balance";
import {BalanceContext, balanceDefaultValue} from "@context/BalanceContext";

const App: FC = () => {
    return (
        <div className="App">
            <BalanceContext.Provider value={balanceDefaultValue}>
                <Container>
                    <Header/>
                    <Balance/>
                </Container>
            </BalanceContext.Provider>
        </div>
    );
};

export default App;