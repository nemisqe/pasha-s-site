import React from 'react';

const AppHeader = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={process.env.PUBLIC_URL + '/'}>Музей жмыховухи</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + '/'}>Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + '/about'}>О нас</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={process.env.PUBLIC_URL + '/gallery'}>Галерея</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AppHeader;
