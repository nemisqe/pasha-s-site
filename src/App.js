import React from 'react';
import AppHeader from "./components/AppHeader";
import {Route, BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./components/HomePage";
import AppFooter from "./components/AppFooter";
import './App.scss';
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AppHeader />
                <main role="main">
                    <Router>
                        <Route path={process.env.PUBLIC_URL + '/'} exact component={HomePage}/>
                        <Route path={process.env.PUBLIC_URL + '/about'} exact component={AboutPage} />
                        <Route path={process.env.PUBLIC_URL + '/gallery'} exact component={GalleryPage} />
                    </Router>
                </main>
                <AppFooter />
            </BrowserRouter>
        </div>
    );
};

export default App;
