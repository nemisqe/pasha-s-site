import React from 'react';
import AppHeader from "./components/AppHeader";
import {Route, HashRouter, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./components/HomePage";
import AppFooter from "./components/AppFooter";
import './App.scss';
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";

const App = () => {
    return (
        <div className="App">
            <HashRouter basename="/">
                <AppHeader />
                <main role="main">
                    <Router>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/about" exact component={AboutPage} />
                        <Route path="/gallery" exact component={GalleryPage} />
                    </Router>
                </main>
                <AppFooter />
            </HashRouter>
        </div>
    );
};

export default App;
