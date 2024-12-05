
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="container">
            <header className="text-center py-5">
                <h1 className="display-4">Apparel Brand</h1>
                <p className="lead">Discover the finest collection of apparels designed for your style.</p>
            </header>
            <main>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="banner.jpeg" className="card-img-top" alt="Banner" />
                            <div className="card-body">
                                <h5 className="card-title">Trending Collection</h5>
                                <p className="card-text">Check out the latest trends and designs.</p>
                                <a href="#" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="esd tee.jpeg" className="card-img-top" alt="ESD Tee" />
                            <div className="card-body">
                                <h5 className="card-title">ESD Tee</h5>
                                <p className="card-text">Experience ultimate comfort and style.</p>
                                <a href="#" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src="venice tee.jpeg" className="card-img-top" alt="Venice Tee" />
                            <div className="card-body">
                                <h5 className="card-title">Venice Tee</h5>
                                <p className="card-text">A perfect choice for casual outings.</p>
                                <a href="#" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-center py-3">
                <p>&copy; 2024 Apparel Brand. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
