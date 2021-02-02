import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PuppyPage from "./pages/PuppyPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-4">
                <Container>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/puppy/:id" component={PuppyPage} exact/>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
