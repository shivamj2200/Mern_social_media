import React from 'react';
import {Link} from "react-router-dom";

let Home = () => {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h5 className="display-4 animated zoomIn"> Social Information App</h5>
                        <p className="animated zoomIn">Welcome to Information Social App </p>
                        <div className="animated jello">
                            <Link to="/users/register" className="btn btn-light btn-sm text-teal">Register</Link>
                            <Link to="/users/login" className="btn btn-teal btn-sm">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Home;
