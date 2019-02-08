import React, { Component } from 'react';
import DogCard from '../../components/DogCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialImages: []
        }
    }
    async componentWillMount() {
        const { getRandomImages } = this.props;
        if (this.props.randomImages.dogsImages.length < 1) {
            await getRandomImages();
        }
        const { dogsImages } = this.props.randomImages;
        this.setState({ initialImages: dogsImages })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-4 justify-content-end">
                        <h2>{'My Dog'}</h2>
                        <p>{'Encuentra Tu Compañero Ideal!'}</p>
                        <Link to={`/todos`}>
                            <button type="button" className="btn btn-outline-primary">{'Ver más Perritos'}</button>
                        </Link>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {this.state.initialImages
                                && this.state.initialImages.map((image, index) => <DogCard image={image} key={index} />)}
                        </div>
                    </div>
                </div>
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
