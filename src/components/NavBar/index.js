import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ home, todos }) => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-md fixed-top">
            <div className="container">
                <button type="button" className="navbar-toggler" data-toggle="collapse"
                    data-target="#menu-principal" aria-controls="menu-principal" aria-expanded="false"
                    aria-label="Desplegar menú de navegación">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse font-weight-bold" id="menu-principal">
                    <ul className="navbar-nav">
                        <Link to="/">
                            <li className="nav-item"><a href="#" className="nav-link active">{home}</a></li>
                        </Link>
                        <Link to="/todos">
                        <li className="nav-item"><a href="#" className="nav-link">{todos}</a></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    home: PropTypes.string,
    todos: PropTypes.string
}
export default NavBar;
