import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

const DogCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map((image, index) =>
                <div>
                    <img key={index} src={image} alt={index} />
                </div>
            )}
        </Carousel>
    );
}

DogCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default DogCarousel;
