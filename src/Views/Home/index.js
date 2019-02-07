import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
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
                <NavBar home={'Home'} todos={'todos'} />
                <div className="row">
                    <div className="col-3">

                        {this.state.initialImages
                            && this.state.initialImages.map(image => <DogCard image={image} />)}
                    </div>
                </div>
                <Link to={`/todos`} hola={'hola'}>
                    <p>Todos los Perros </p>
                </Link>
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
