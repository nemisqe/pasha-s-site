import React from 'react';
import './GalleryPage.scss';

const GalleryPage = () => {
    return (
        <div>
            <div className="col-md-12">

                <div className="GalleryPage-container">

                    <figure className="col-md-4">
                        <a href="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                           data-size="1600x1067">
                            <img alt="picture"
                                 src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                 className="img-fluid" />
                        </a>
                    </figure>

                    <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg"
                           data-size="1600x1067">
                            <img alt="picture"
                                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg"
                                 className="img-fluid"/>
                        </a>
                    </figure>

                    <figure className="col-md-4">
                        <a href="https://1843magazine.static-economist.com/sites/default/files/styles/article-main-image-overlay/public/WC-cat-header%203.jpg"
                           data-size="1600x1067">
                            <img alt="picture"
                                 src="https://1843magazine.static-economist.com/sites/default/files/styles/article-main-image-overlay/public/WC-cat-header%203.jpg"
                                 className="img-fluid"
                            />
                        </a>
                    </figure>

                </div>

            </div>
        </div>
    );
};

export default GalleryPage;
