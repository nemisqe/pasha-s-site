import React from 'react';
import './AppFooter.scss';

const AppFooter = () => {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="footer-copyright text-center py-3">
                        © 2020 Жмыховуха. Все права защиищены!
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
