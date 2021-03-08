import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PuppyPage from "./pages/PuppyPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-4">
                <Container>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/puppy/:id" component={PuppyPage}/>
                    <Route path="/cart/:id?" component={CartPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/shipping" component={ShippingPage}/>
                    <Route path="/placeorder" component={PlaceOrderPage}/>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
