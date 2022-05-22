import React from "react";
import "@styles/global.scss";
import Container from "@components/container/Container";
import Header from "@components/header/Header";

const App: React.FC = () => {
    return (
        <div className="App">
            <Container>
                <Header/>
            </Container>
        </div>
    );
};

export default App;