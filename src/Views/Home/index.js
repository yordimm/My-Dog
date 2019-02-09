import React, { Component, Suspense, lazy } from 'react';
import DefaultImage from '../../components/DefaultImage';
import DogLoader from '../../components/DogLoader';
import DogDescription from '../../components/DogDescription';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';

const DogCard = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2 * 1000)).then(
        () => import('../../components/DogCard')
    );
});


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialImages: [],
            error: ''
        }
    }
    async componentWillMount() {
        const { getRandomImages } = this.props;
        if (this.props.randomImages.dogsImages.length < 1) {
            await getRandomImages();
        }
        const { dogsImages, errordogsImages } = this.props.randomImages;
        if (errordogsImages) {
            this.setState({ error: errordogsImages })
        }
        this.setState({ initialImages: dogsImages })
    }
    render() {
        return (
            <div className="container">
                {!this.state.error ?
                    <div className="row">
                        <DogDescription name={'My Dog'} description={'¿Qué esperas para encontrar a tu compañero ideal?'}>
                            <Link to={`/todos`}>
                                <button type="button" className="btn btn-primary">{'Ver Perritos'}</button>
                            </Link>
                        </DogDescription>
                        <div className="col-sm-12 col-lg-8">
                            <div className="d-md-flex ">
                                {this.state.initialImages.length > 0
                                    ? this.state.initialImages.map((image, index) =>
                                        <Suspense fallback={<DefaultImage />}>
                                            <DogCard image={image} key={index} />
                                        </Suspense>
                                    ) : <DogLoader />}
                            </div>
                        </div>
                    </div> : <p>{this.state.error}</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogsState,
        randomImages: state.randomImagesState
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
