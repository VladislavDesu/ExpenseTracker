import React from "react";
import "@styles/global.scss";
import Container from "@components/container/Container";
import Header from "@components/header/Header";
import Balance from "@components/balance/Balance";

const App: React.FC = () => {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Balance/>
            </Container>
        </div>
    );
};

export default App;