import React from 'react';
import PropTypes from 'prop-types';

const DogDescription = ({ description, name }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">
                    {description}
                </p>
            </div>
        </div>
    );
}

DogDescription.propTypes = {
    description: PropTypes.string,
    name: PropTypes.string
}
export default DogDescription;
