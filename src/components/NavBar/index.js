import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ routes }) => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-md mb-5">
            <div className="container">
                <button type="button" className="navbar-toggler" data-toggle="collapse"
                    data-target="#menu-principal" aria-controls="menu-principal" aria-expanded="false"
                    aria-label="Desplegar menú de navegación">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse font-weight-bold" id="menu-principal">
                    <ul className="navbar-nav">
                        {routes.map((route, index) =>
                            <Link to={route.link} key={index}>
                                <li className="nav-item"><a href="#" className="nav-link">{route.name}</a></li>
                            </Link>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default NavBar;
