import React from 'react';
import './HomePage.scss';

const HomePage = (props) => {
    return(
        <div className="jumbotron">
            <h1 className="display-r">
                Добро пожаловать в музей жмыховухи!
            </h1>
            <p className="lead">
                Здесь столько всего...
            </p>
            <p className="HomePage-Information">
                Можно и походить, и посмотреть. И все это абсолютно за деньги!
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Задонатить на пиво</a>
            </p>
        </div>
    );
};

export default HomePage;
