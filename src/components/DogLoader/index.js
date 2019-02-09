import React from 'react';
import Loader from 'react-loader-spinner';

const DogLoader = () => {
    return (
        <div className="d-flex">
            <h3 className="m-h-2">{'Cargando'}</h3>
            <Loader
                type="TailSpin"
                color="#FF5912"
                height="30"
                width="30"
            />
        </div>
    );
}

export default DogLoader;
