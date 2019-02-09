import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

const DogCarousel = ({ images }) => {
    return (
        <div className="col-sm-10 col-lg-6 animated fadeIn fast">
            <Carousel className ="dogDetail ">
                {images.map((image, index) =>
                    <div>
                        <img className="dogDetail" key={index} src={image} alt={index} />
                    </div>
                )}
            </Carousel>
        </div>
    );
}

DogCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default DogCarousel;
