import React from 'react';
import PropTypes from 'prop-types';

const DogDescription = ({ description, name, children }) => {
    return (
        <div className="col-sm-10 col-md-6 col-lg-4">
            <div className=" d-flex flex-column justify-content-around">
                <h2 className="card-title display-sm-5 display-lg-4 font-weight-bold text-primary">{name}</h2>
                <hr className="my-2" />
                <p className="card-text">
                    {description}
                </p>
                {children}
            </div>
        </div>
    );
}

DogDescription.propTypes = {
    description: PropTypes.string,
    name: PropTypes.string
}
export default DogDescription;
