import React, {FC} from "react";
import "@styles/global.scss";
import Container from "@components/container/Container";
import Header from "@components/header/Header";
import Balance from "@components/balance/Balance";
import {BalanceContext, balanceDefaultValue} from "@context/BalanceContext";
import History from "@components/history/History";

const App: FC = () => {
    return (
        <div className="App">
            <BalanceContext.Provider value={balanceDefaultValue}>
                <Container>
                    <Header/>
                    <Balance/>
                    <History/>
                </Container>
            </BalanceContext.Provider>
        </div>
    );
};

export default App;