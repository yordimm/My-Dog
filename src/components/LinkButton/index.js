import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = ({ link, content }) => {
    return (
        <Link to={link}>
            <button type="button" className="btn btn-primary">{content}</button>
        </Link>
    );
}

LinkButton.propTypes = {
    link: PropTypes.string,
    contentc: PropTypes.string
}
export default LinkButton;
